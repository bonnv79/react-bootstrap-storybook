import React from 'react';
import { Form } from '../index';

export default {
  title: 'components/Form/Range',
  component: Form,
  argTypes: {},
};

const FormControlTemplate = (args) => {
  return (
    <Form>
      <h3>Range</h3>
      <Form.Range />
    </Form>
  );
};

export const Range = FormControlTemplate.bind({});
Range.args = {}