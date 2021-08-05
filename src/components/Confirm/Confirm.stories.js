import React from 'react';
import { Confirm, Button } from '../index';

export default {
  title: 'components/Confirm',
  component: Confirm,
  argTypes: {},
};

const Template = (args) => {
  const [show, setShow] = React.useState(args.show);
  const onClose = () => setShow(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Open Confirm</Button>

      <Confirm {...args} show={show} onHide={onClose} onCancel={onClose} onSave={onClose} >
        Are you sure you want to delete it?
      </Confirm>
    </>
  );
};

export const _Confirm = Template.bind({});
_Confirm.args = {
  show: true
};