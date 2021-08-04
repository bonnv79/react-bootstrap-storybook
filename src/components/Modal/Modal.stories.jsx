import React from 'react';
import { Modal, Button } from '../index';

export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: {},
};

const Template = (args) => {
  const [show, setShow] = React.useState(false);
  const onClose = () => setShow(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Open modal</Button>

      <Modal {...args} show={show} onHide={onClose} onCancel={onClose} >
        <div style={{ height: 200 }}>
          dsfdsfsdf
        </div>
      </Modal>
    </>
  );
};

export const Modal_Story = Template.bind({});
Modal_Story.args = {
  title: 'Modal title',
  footer: ''
};