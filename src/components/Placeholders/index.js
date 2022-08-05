import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Placeholders = ({ children, className, isMargin, ...props }) => {

  const modifyChildren = (child) => {
    const props = {
      className: `${child?.props?.className} placeholder ${isMargin ? 'margin' : ''}`
    };

    return React.cloneElement(child, props);
  }

  return (
    <div className={`placeholder-root placeholder-glow ${className}`} {...props}>
      {React.Children.map(children, child => modifyChildren(child))}
    </div>
  );
};

Placeholders.defaultProps = {
  children: '',
  className: '',
  isMargin: false,
};

Placeholders.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isMargin: PropTypes.bool,
};

export default Placeholders;
export { Placeholders };