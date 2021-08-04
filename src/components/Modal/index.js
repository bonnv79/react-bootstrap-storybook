import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import './index.css';

const modalSize = {
  SM: 'sm',
  LG: 'lg',
  XL: 'xl'
};

const ModalB = ({
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
    <Modal
      show={show}
      onHide={onHide}
      backdrop={backdrop || 'static'}
      keyboard={backdrop === true}
      {...props}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      {
        footerComponent && (
          <Modal.Footer>
            {footerComponent}
          </Modal.Footer>
        )
      }
    </Modal>
  );
};

ModalB.defaultProps = {
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

ModalB.propTypes = {
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

export default ModalB;
export { ModalB as Modal };