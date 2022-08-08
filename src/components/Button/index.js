import React from 'react';
import PropTypes from 'prop-types';
import { Button as BButton, Spinner } from 'react-bootstrap';
import './index.css';

const buttonVariant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
  LINK: 'link',
  OUTLINE_PRIMARY: 'outline-primary',
  OUTLINE_SECONDARY: 'outline-secondary',
  OUTLINE_SUCCESS: 'outline-success',
  OUTLINE_DANGER: 'outline-danger',
  OUTLINE_WARNING: 'outline-warning',
  OUTLINE_INFO: 'outline-info',
  OUTLINE_DARK: 'outline-dark',
  OUTLINE_LIGHT: 'outline-light'
};

const buttonSize = {
  SM: 'sm',
  LG: 'lg'
};

const Button = ({ loading, loadingText, children, SpinnerProps, ...props }) => {
  return (
    <BButton {...props}>
      {loading ? (
        <span className="btn-loading-container">
          <Spinner {...SpinnerProps} />
          <span className="btn-loading-text">{loadingText}</span>
        </span>
      ) : children}
    </BButton>
  );
};

Button.defaultProps = {
  children: '',
  variant: 'secondary',
  size: 'sm',
  active: false,
  disabled: false,
  onClick: undefined,
  loading: false,
  loadingText: 'Loading',
  SpinnerProps: {
    size: 'sm',
    animation: 'border',
  }
};

Button.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.oneOf(Object.values(buttonVariant)),
  size: PropTypes.oneOf(Object.values(buttonSize)),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  SpinnerProps: PropTypes.instanceOf(Object),
};

export default Button;
export { Button, buttonVariant, buttonSize };