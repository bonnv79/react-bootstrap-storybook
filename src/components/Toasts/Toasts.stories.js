import React, { useState } from 'react';
import { Toasts, Button } from '../index';

export default {
  title: 'components/Toasts',
  component: Toasts,
  argTypes: {},
};

const Template = (args) => {
  const [show, setShow] = useState(true);
  const onClose = () => setShow(false);
  return <>
    <Toasts {...args} show={show} onClose={onClose} />
    {!show && <Button onClick={() => setShow(true)}>CLick show Toasts</Button>}
  </>;
};

export const _Toasts = Template.bind({});
_Toasts.args = {
  header: (
    <>
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
    </>
  ),
  children: (
    'Hello, world! This is a toast message.'
  ),
  show: false,
  position: undefined,
  delay: 3000,
  autohide: false,
  bg: undefined,
};
