import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import './index.css';

const Loading = ({ className, open, background, ...props }) => {

  return open && (
    <div style={{ background }} className={`loading-root ${className}`}>
      <Spinner role="status" {...props}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

Loading.defaultProps = {
  className: '',
  open: false,
  animation: 'border',
  size: undefined,
  variant: 'light',
  background: '#00000091',
};

Loading.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  animation: PropTypes.oneOf(['border', 'grow']),
  size: PropTypes.oneOf(['sm']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  background: PropTypes.string,
};

export default Loading;
export { Loading };