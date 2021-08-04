import React from 'react';
import PropTypes from 'prop-types';
import ButtonB from 'react-bootstrap/Button';

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

const buttonSize = ['sm', 'lg'];

const Button = ({ ...props }) => {
  return (
    <ButtonB {...props} />
  );
};

Button.defaultProps = {
  children: '',
  variant: 'secondary',
  size: 'sm',
  active: false,
  disabled: false,
  onClick: undefined,
};

Button.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.oneOf(Object.values(buttonVariant)),
  size: PropTypes.oneOf(buttonSize),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
export { Button, buttonVariant, buttonSize };