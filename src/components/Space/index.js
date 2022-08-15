import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const getValue = (value) => value ? value : '';

const parseSize = {
  sm: 'sm',
  lg: 'lg',
}

const Space = ({ className, direction, size, align, wrap, style, ...props }) => {
  const isSizeClass = parseSize[size];
  if (size && !isSizeClass) {
    style.gap = size;
  } else {
    style.gap = undefined;
  }
  return (
    <div
      style={{ ...style }}
      className={`bt-space ${direction} ${isSizeClass ? size : ''} ${align ? align : ''} ${wrap ? 'wrap' : ''} ${className}`}
      {...props}
    />
  );
};

Space.defaultProps = {
  style: {},
  className: '',
  children: '',
  direction: 'horizontal',
  size: undefined,
  align: undefined,
  wrap: true,
};

Space.propTypes = {
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  children: PropTypes.any,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.string,
  align: PropTypes.oneOf(['start', 'end', 'center', 'baseline']),
  wrap: PropTypes.bool,
};

export default Space;
export { Space };