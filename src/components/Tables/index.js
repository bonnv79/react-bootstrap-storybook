import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import './index.css';
import { toString } from 'lodash';

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

const Tables = ({ data, columns, rowKey, value, onChange, ellipsis, className, ...props }) => {
  const handleOnChange = (val) => (e) => {
    onChange(val, e);
  }

  return (
    <Table className={`${className} ${ellipsis ? 'table-ellipsis' : ''}`} {...props}>
      <thead>
        <tr>
          {
            columns.map(col => {
              return (
                <th key={col.dataIndex}>{col.title}</th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, rowIndex) => {
            const id = item[rowKey];
            const trClassName = id === value ? 'tables-item-selected' : '';
            return (
              <tr key={id} className={trClassName} onClick={handleOnChange(id)}>
                {
                  columns.map(col => {
                    const { render, dataIndex } = col;
                    let label = item[dataIndex];

                    if (typeof render === 'function') {
                      label = render(id, { ...item, rowIndex });
                    }

                    return (
                      <td title={toString(label)} key={`${id}${dataIndex}`} className={trClassName}>
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
  onChange: () => { },
  ellipsis: true,
  className: '',
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
};

export default Tables;
export { Tables, tablesVariants };