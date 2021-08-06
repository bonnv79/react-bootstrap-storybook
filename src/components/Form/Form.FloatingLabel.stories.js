import React from 'react';
import { Form } from '../index';

export default {
  title: 'components/Form/Floatinglabel',
  component: Form,
  argTypes: {},
};

const Template = (args) => {
  return (
    <Form>
      <h3>Form.FloatingLabel</h3>
      <Form.FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.FloatingLabel>
      <Form.FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </Form.FloatingLabel>
    </Form>
  );
};

export const Floatinglabel = Template.bind({});
Floatinglabel.args = {}