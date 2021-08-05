import React from 'react';
import { Modal, Button } from '../index';

export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: {},
};

const Template = (args) => {
  const [show, setShow] = React.useState(args.show);
  const onClose = () => setShow(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Open modal</Button>

      <Modal {...args} show={show} onHide={onClose} onCancel={onClose} onSave={onClose} >
        <div style={{ height: 200 }}>
          Modal Body
        </div>
      </Modal>
    </>
  );
};

export const _Modal = Template.bind({});
_Modal.args = {
  show: true,
  title: 'Modal title',
  footer: ''
};