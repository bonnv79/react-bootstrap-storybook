import React from 'react';
import { Button, buttonVariant } from '../index';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {},
};

export const Button_Story = (args) => {
  return Object.values(buttonVariant).map(variant => (
    <span key={variant} style={{ margin: 5 }}>
      <Button {...args} variant={variant}>
        Button
      </Button>
    </span>
  ));
};