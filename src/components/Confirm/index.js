import React from 'react';
import PropTypes from 'prop-types';
import { Modal as BModal, Button } from 'react-bootstrap';
import './index.css';

const modalSize = {
  SM: 'sm',
  LG: 'lg',
  XL: 'xl'
};

const colors = {
  confirm: '#00000033',
  warning: '#faad14',
  info: '#1890ff',
  error: '#ff4d4f'
}

const icons = {
  confirm: <i style={{ color: colors.warning }} className="bi bi-exclamation-circle bootstrap-confirm-icon"></i>,
  warning: <i style={{ color: colors.warning }} className="bi bi-exclamation-circle bootstrap-confirm-icon"></i>,
  info: <i style={{ color: colors.info }} className="bi bi-info-circle bootstrap-confirm-icon"></i>,
  error: <i style={{ color: colors.error }} className="bi bi-x-circle bootstrap-confirm-icon"></i>,
}

const Confirm = ({
  title,
  children,
  footer,
  show,
  onHide,
  onSave,
  onCancel,
  backdrop,
  type,
  contentClassName,
  noBtnText,
  yesBtnText,
  ...props
}) => {

  return (
    <BModal
      show={show}
      onHide={onHide}
      backdrop={'static'}
      keyboard={false}
      contentClassName={`${contentClassName} ${type}`}
      {...props}
    >
      <BModal.Header className="bootstrap-confirm-header">
        <BModal.Title className="bootstrap-confirm-title">
          {icons[type]}
          {title}
        </BModal.Title>
      </BModal.Header>
      <BModal.Body className="bootstrap-confirm-body">
        {children}
      </BModal.Body>
      <BModal.Footer className="bootstrap-confirm-footer">
        {
          noBtnText && (
            <Button className="button-cancel" variant="secondary" size="sm" onClick={onCancel}>
              {noBtnText}
            </Button>
          )
        }

        {
          yesBtnText && (
            <Button className="button-save" variant="primary" size="sm" onClick={onSave}>
              {yesBtnText}
            </Button>
          )
        }
      </BModal.Footer>
    </BModal>
  );
};

Confirm.defaultProps = {
  title: 'Confirm',
  children: '',
  show: false,
  size: modalSize.SM,
  centered: true,
  dialogClassName: 'bootstrap-confirm',
  contentClassName: 'bootstrap-confirm-content',
  backdropClassName: 'bootstrap-confirm-backdrop',
  type: 'confirm',
  noBtnText: 'No',
  yesBtnText: 'Yes',
  onSave: undefined,
  onCancel: undefined,
};

Confirm.propTypes = {
  title: PropTypes.any,
  children: PropTypes.any,
  show: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(modalSize)),
  centered: PropTypes.bool,
  dialogClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(icons)),
  noBtnText: PropTypes.string,
  yesBtnText: PropTypes.string,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

export default Confirm;
export { Confirm };