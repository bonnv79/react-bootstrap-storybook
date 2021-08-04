import React from 'react';
import PropTypes from 'prop-types';
import { Modal as BModal, Button } from 'react-bootstrap';
import './index.css';

const modalSize = {
  SM: 'sm',
  LG: 'lg',
  XL: 'xl'
};

const Modal = ({
  title,
  children,
  footer,
  show,
  onHide,
  onSave,
  onCancel,
  backdrop,
  ...props
}) => {
  let footerComponent = (
    <React.Fragment>
      <Button className="button-cancel" variant="secondary" size="sm" onClick={onCancel}>
        Cancel
      </Button>
      <Button className="button-save" variant="primary" size="sm" onClick={onSave}>
        Save
      </Button>
    </React.Fragment>
  )

  if (footer || footer === false) {
    footerComponent = footer;
  }

  return (
    <BModal
      show={show}
      onHide={onHide}
      backdrop={backdrop || 'static'}
      keyboard={backdrop === true}
      {...props}
    >
      <BModal.Header closeButton>
        <BModal.Title>
          {title}
        </BModal.Title>
      </BModal.Header>
      <BModal.Body>
        {children}
      </BModal.Body>
      {
        footerComponent && (
          <BModal.Footer>
            {footerComponent}
          </BModal.Footer>
        )
      }
    </BModal>
  );
};

Modal.defaultProps = {
  title: '',
  children: '',
  footer: '',
  show: false,
  backdrop: true,
  size: 'lg',
  centered: true,
  fullscreen: false,
  scrollable: false,
  dialogClassName: 'bootstrap-dialog',
  contentClassName: 'bootstrap-dialog-content',
  backdropClassName: 'bootstrap-dialog-backdrop',
  onHide: undefined,
  onSave: undefined,
  onCancel: undefined,
};

Modal.propTypes = {
  title: PropTypes.any,
  children: PropTypes.any,
  footer: PropTypes.any,
  show: PropTypes.bool,
  backdrop: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(modalSize)),
  centered: PropTypes.bool,
  fullscreen: PropTypes.bool,
  scrollable: PropTypes.bool,
  dialogClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  onHide: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

export default Modal;
export { Modal };