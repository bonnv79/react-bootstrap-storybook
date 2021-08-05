import React from 'react';
import { Form } from '../index';

export default {
  title: 'components/Form/Control',
  component: Form,
  argTypes: {},
};

const types = [
  // 'button',
  // 'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  // 'image',
  'month',
  'number',
  'password',
  // 'radio',
  // 'range',
  // 'reset',
  'search',
  // 'submit',
  // 'tel',
  'text',
  'time',
  // 'url',
  // 'week'
]

const FormControlTemplate = (args) => {
  return (
    <Form>
      <h3>Form.Control type</h3>
      {
        types.map(item => (
          <Form.Group key={item} className="mb-3">
            <Form.Label>type={item}</Form.Label>
            <Form.Control type={item} placeholder={`input ${item}`} />
          </Form.Group>
        ))
      }

      <Form.Group className="mb-3">
        <Form.Label>as="textarea"</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <h3>Form.Control size</h3>
      <Form.Group className="mb-3">
        <Form.Label>size="lg"</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Large text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>size=""</Form.Label>
        <Form.Control type="text" placeholder="Normal text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>size="sm"</Form.Label>
        <Form.Control size="sm" type="text" placeholder="Small text" />
      </Form.Group>

      <h3>Form.Control readOnly</h3>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Readonly input here..." readOnly />
      </Form.Group>

      <h3>Form.Control plaintext</h3>
      <Form.Group className="mb-3">
        <Form.Control plaintext defaultValue="email@example.com" />
      </Form.Group>

      <h3>Form.Control File input</h3>
      <Form.Group className="mb-3">
        <Form.Label>multiple=false</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>multiple</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>

    </Form>
  );
};

export const Control = FormControlTemplate.bind({});
Control.args = {}