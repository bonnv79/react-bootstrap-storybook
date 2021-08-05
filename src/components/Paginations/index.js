import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import './index.css';

const { First, Prev, Item, Ellipsis, Next, Last } = Pagination;

const makeItem = (index, activeIndex, setActiveIndex, size) => {
  return (
    <Item
      className={`paginations-item ${size}`}
      active={index === activeIndex}
      onClick={setActiveIndex(index)}
    >
      {index + 1}
    </Item>
  )
}

const makeEllipsis = (index, activeIndex, setActiveIndex, size) => {
  return (
    <Ellipsis
      className={`paginations-item ${size}`}
      onClick={setActiveIndex(index)}
    />
  )
}

const getRange = ({ totalPage, activeIndex, setActiveIndex, config, size }) => {
  let range = [];
  const maxPage = totalPage - 1;
  const renderItem = (index) => makeItem(index, activeIndex, setActiveIndex, size);
  const renderEllipsis = (index) => makeEllipsis(index, activeIndex, setActiveIndex, size);
  const middle = Math.floor(config / 2);

  if (totalPage <= config + 4) {
    for (let i = 0; i < totalPage; i += 1) {
      range.push(renderItem(i));
    }
  } else {
    const leftMiddle = activeIndex - middle;
    const rightMiddle = activeIndex + middle;

    range.push(renderItem(0));

    if (leftMiddle > 1) {
      range.push(renderEllipsis(Math.max(activeIndex - config, 0)));
    }

    const configMore = config + 1;
    const max = Math.max(rightMiddle, configMore);
    const min = Math.min(leftMiddle, maxPage - configMore);

    for (let i = Math.max(min, 1); i <= Math.min(max, maxPage - 1); i += 1) {
      range.push(renderItem(i));
    }

    if (rightMiddle < maxPage - 1) {
      range.push(renderEllipsis(Math.min(activeIndex + config, maxPage)));
    }

    range.push(renderItem(maxPage));
  }

  return range;
}

const Paginations = ({ count, pageSize, activeIndex, onChange, config, size, ...props }) => {
  const totalPage = Math.ceil(count / pageSize);

  const setActiveIndex = (index) => () => {
    if (index !== activeIndex) {
      onChange(index);
    }
  }

  const range = getRange({ totalPage, setActiveIndex, activeIndex, config, size });
  const disabledFirst = activeIndex === 0;
  const disabledLast = activeIndex === totalPage - 1;

  return (
    <Pagination size={size} {...props}>
      <First
        disabled={disabledFirst}
        onClick={setActiveIndex(0)}
      />
      <Prev
        disabled={disabledFirst}
        onClick={setActiveIndex(Math.max(0, activeIndex - 1))}
      />
      {
        range.map((item, index) => (
          <React.Fragment key={`key-${index}`}>
            {item}
          </React.Fragment>
        ))
      }
      <Next
        disabled={disabledLast}
        onClick={setActiveIndex(Math.min(totalPage - 1, activeIndex + 1))}
      />
      <Last
        disabled={disabledLast}
        onClick={setActiveIndex(totalPage - 1)}
      />
    </Pagination>
  );
};

Paginations.defaultProps = {
  count: 0,
  pageSize: 10,
  activeIndex: 0,
  config: 5,
  size: undefined,
  onChange: () => { },
};

Paginations.propTypes = {
  count: PropTypes.number,
  pageSize: PropTypes.number,
  activeIndex: PropTypes.number,
  config: PropTypes.oneOf([3, 5, 7, 9, 11]),
  size: PropTypes.oneOf(['sm', 'lg']),
  onChange: PropTypes.func,
};

export default Paginations;
export { Paginations };