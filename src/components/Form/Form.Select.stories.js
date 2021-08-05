import React from 'react';
import { Form } from '../index';

export default {
  title: 'components/Form/Select',
  component: Form,
  argTypes: {},
};

const FormControlTemplate = (args) => {
  return (
    <Form>
      <h3>Select</h3>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>

      <br />

      <h3>Select size</h3>
      <Form.Select size="lg">
        <option>Large select</option>
      </Form.Select>
      <br />
      <Form.Select>
        <option>Default select</option>
      </Form.Select>
      <br />
      <Form.Select size="sm">
        <option>Small select</option>
      </Form.Select>

    </Form>
  );
};

export const Select = FormControlTemplate.bind({});
Select.args = {}