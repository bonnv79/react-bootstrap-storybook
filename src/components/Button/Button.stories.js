import React from 'react';
import { Button, buttonVariant } from '../index';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {},
};

export const _Button = (args) => {
  return Object.values(buttonVariant).map(variant => (
    <span key={variant} style={{ margin: 5 }}>
      <Button {...args} variant={variant}>
        {variant}
      </Button>
    </span>
  ));
};