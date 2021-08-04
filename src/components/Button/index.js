import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

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

const ButtonB = ({ ...props }) => {
  return (
    <Button {...props} />
  );
};

ButtonB.defaultProps = {
  children: '',
  variant: 'secondary',
  size: 'sm',
  active: false,
  disabled: false,
  onClick: undefined,
};

ButtonB.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.oneOf(Object.values(buttonVariant)),
  size: PropTypes.oneOf(Object.values(buttonSize)),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ButtonB;
export { ButtonB as Button, buttonVariant, buttonSize };