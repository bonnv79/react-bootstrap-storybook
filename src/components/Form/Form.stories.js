import React from 'react';
import { Form } from '../index';

export default {
  title: 'components/Form',
  component: Form,
  argTypes: {},
};

const Template = (args) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasic-Radio">
        <Form.Check
          type="radio"
          name="group1"
          label="Radio 1"
          inline
          id="inline-1"
        />
        <Form.Check
          type="radio"
          name="group1"
          label="Radio 2"
          inline
          id="inline-2"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasic-Range">
        <Form.Label>Range</Form.Label>
        <Form.Range />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasic-Select">
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasic-FloatingLabel">
        <Form.FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.FloatingLabel>
      </Form.Group>
    </Form>
  );
};

export const Form_Story = Template.bind({});
Form_Story.args = {

}