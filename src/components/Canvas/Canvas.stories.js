import React, { useState } from 'react';
import { Canvas, Button } from '../index';

export default {
  title: 'components/Canvas',
  component: Canvas,
  argTypes: {},
};

const Template = (args) => {
  const [show, setShow] = useState(args.show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <>
    <Button variant="primary" onClick={handleShow}>
      Open
    </Button>
    <Canvas {...args} show={show} onHide={handleClose} >
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </Canvas>
  </>;
};

export const _Canvas = Template.bind({});
_Canvas.args = {
  title: 'Offcanvas',
  show: true
};
