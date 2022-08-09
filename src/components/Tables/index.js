import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import './index.css';
import { isString } from 'lodash';
import Paginations from '../Paginations';
import Select from '../Select';

const tablesVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
  LINK: 'link',
};

const PAGE_SIZE_OPTIONS = [
  {
    id: 5,
    name: 5
  },
  {
    id: 10,
    name: 10
  },
  {
    id: 20,
    name: 20
  },
  {
    id: 50,
    name: 50
  },
  {
    id: 100,
    name: 100
  },
];

const DEFAULT_PAGE_SIZE = 10;

const DEFAULT_PAGINATIONS_PROPS = {
  config: 5,
  size: 'sm',
  pageSize: DEFAULT_PAGE_SIZE,
  pageSizeOptions: PAGE_SIZE_OPTIONS,
  renderTotalText: (length) => (`Total: ${length}`)
};

const PAGINATIONS_SIZE = {
  sm: 'form-select-sm',
  lg: 'form-select-lg',
}

const Tables = ({
  data: initData,
  columns,
  rowKey,
  value,
  onChange,
  ellipsis,
  className,
  maxHeight,
  theadClassName,
  pagination,
  PaginationsProps: initPaginationsProps,
  renderDataNotFound,
  ...props
}) => {
  const { pageSizeOptions, renderTotalText, ...PaginationsProps } = Object.assign(DEFAULT_PAGINATIONS_PROPS, initPaginationsProps);
  const [pageSize, setPageSize] = useState(PaginationsProps.pageSize);
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState(pagination ? initData?.slice(0, pageSize) : initData);
  const isEmpty = initData?.length <= 0;

  const freshData = () => {
    const totalPage = Math.ceil(initData?.length / pageSize);
    handleChangePage(Math.min(activeIndex, totalPage - 1), pageSize);
  }

  useEffect(() => {
    if (pagination) {
      freshData();
    }
  }, [initData, pagination]);

  const handleOnChange = (val, item) => (e) => {
    onChange(val, e, item);
  }

  const handleChangePage = (value, vPageSize = pageSize) => {
    setActiveIndex(value);
    const start = value * vPageSize;
    const newData = initData?.slice(start, start + vPageSize);
    setData(newData);
  }

  const handlePageSize = (value) => {
    const vPageSize = Number(value);
    setActiveIndex(0);
    setPageSize(vPageSize);
    handleChangePage(0, vPageSize);
  }

  return (
    <div className='table-container'>
      <div className={maxHeight ? 'table-scroll' : ''} style={{ maxHeight }}>
        <Table className={`${className} ${ellipsis ? 'table-ellipsis' : ''}`} {...props}>
          <thead className={theadClassName}>
            <tr>
              {
                pagination && (
                  <th className='center'>#</th>
                )
              }

              {
                columns?.map(col => {
                  return (
                    <th key={col.dataIndex}>{col.title}</th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {isEmpty && (
              <tr>
                <td colSpan={columns?.length + 1}>{renderDataNotFound(PAGINATIONS_SIZE[props.size])}</td>
              </tr>
            )}
            {
              (pagination ? data : initData)?.map((item, rowIndex) => {
                const id = item[rowKey];
                const trClassName = id === value ? 'tables-item-selected' : '';
                return (
                  <tr key={id} className={trClassName} onClick={handleOnChange(id, item)}>
                    {
                      pagination && (
                        <td className={`center ${trClassName}`}>
                          {activeIndex * pageSize + rowIndex + 1}
                        </td>
                      )
                    }

                    {
                      columns?.map(col => {
                        const { render, dataIndex } = col;
                        let label = item[dataIndex];

                        if (typeof render === 'function') {
                          label = render(id, { ...item, rowIndex });
                        }

                        return (
                          <td title={isString(label) ? label : undefined} key={`${id}${dataIndex}`} className={trClassName}>
                            {label}
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
      {
        (pagination && !isEmpty) && (
          <div className='table-paginations'>
            <span
              className={PAGINATIONS_SIZE[PaginationsProps.size]}
            >
              {renderTotalText(initData?.length)}
            </span>
            <span>
              <Select
                data={pageSizeOptions}
                onChange={handlePageSize}
                value={`${pageSize}`}
                size={PaginationsProps.size}
              />
            </span>
            <Paginations
              count={initData?.length}
              activeIndex={activeIndex}
              onChange={handleChangePage}
              {...PaginationsProps}
              pageSize={pageSize}
            />
          </div>
        )
      }
    </div>
  );
};

Tables.defaultProps = {
  data: [],
  columns: [],
  rowKey: 'id',
  striped: true,
  bordered: true,
  hover: true,
  responsive: true,
  borderless: false,
  size: undefined,
  variant: undefined,
  value: '',
  onChange: (value, event, rowData) => { },
  ellipsis: true,
  className: '',
  maxHeight: undefined,
  theadClassName: '',
  pagination: false,
  PaginationsProps: DEFAULT_PAGINATIONS_PROPS,
  renderDataNotFound: (className) => (
    <div className={`data-not-found ${className}`}>Data Not Found</div>
  )
};

Tables.propTypes = {
  data: PropTypes.arrayOf(Object),
  columns: PropTypes.arrayOf(Object),
  rowKey: PropTypes.string,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.bool,
  borderless: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  variant: PropTypes.oneOf(Object.values(tablesVariants)),
  value: PropTypes.string,
  onChange: PropTypes.func,
  ellipsis: PropTypes.bool,
  className: PropTypes.string,
  maxHeight: PropTypes.string,
  theadClassName: PropTypes.string,
  pagination: PropTypes.bool,
  PaginationsProps: PropTypes.instanceOf(Object),
  renderDataNotFound: PropTypes.func
};

export default Tables;
export { Tables, tablesVariants };