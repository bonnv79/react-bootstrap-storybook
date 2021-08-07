import React from 'react';
import PropTypes from 'prop-types';
import { Toast, ToastContainer } from 'react-bootstrap';

const { Header, Body, } = Toast;

const toastsBgs = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light'
};

const toastsPositions = {
  TOP_START: 'top-start',
  TOP_CENTER: 'top-center',
  TOP_END: 'top-end',
  MIDDLE_START: 'middle-start',
  MIDDLE_CENTER: 'middle-center',
  MIDDLE_END: 'middle-end',
  BOTTOM_START: 'bottom-start',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_END: 'bottom-end'
}

const Toasts = ({ header, children, position, ...props }) => {

  return (
    <ToastContainer className="p-3" position={position}>
      <Toast {...props}>
        {
          header && (
            <Header>
              {header}
            </Header>
          )
        }
        {
          children && (
            <Body>
              {children}
            </Body>
          )
        }
      </Toast>
    </ToastContainer>
  );
};

Toasts.defaultProps = {
  header: '',
  children: '',
  show: false,
  position: toastsPositions.TOP_END,
  delay: 3000,
  autohide: false,
  bg: undefined,
  onClose: () => { }
};

Toasts.propTypes = {
  header: PropTypes.any,
  children: PropTypes.any,
  show: PropTypes.bool,
  position: PropTypes.oneOf(Object.values(toastsPositions)),
  delay: PropTypes.number,
  autohide: PropTypes.bool,
  bg: PropTypes.oneOf(Object.values(toastsBgs)),
  onClose: PropTypes.func,
};

export default Toasts;
export { Toasts };