import React from 'react';
import { Spinner, Button } from '../index';

export default {
  title: 'components/Spinner',
  component: Spinner,
  argTypes: {},
};

const Template = (args) => {
  return (
    <>
      <h3>Border Spinner - border</h3>
      <Spinner animation="border" />
      <br />

      <h3>Grow Spinner - grow</h3>
      <Spinner animation="grow" />
      <br />

      <h3>Variants</h3>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
      <br />

      <h3>Sizing</h3>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
      <br />

      <h3>Buttons</h3>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      <br />
    </>
  );
};

export const _Spinner = Template.bind({});
_Spinner.args = {};
