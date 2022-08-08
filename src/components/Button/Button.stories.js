import React from 'react';
import { Button, buttonVariant } from '../index';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {
        Object.values(buttonVariant).map(variant => (
          <span key={variant} style={{ margin: 5 }}>
            <Button {...args} variant={variant}>
              {variant}
            </Button>
          </span>
        ))
      }
    </div>
  );
};

export const _Button = Template.bind({});
_Button.args = {
  loading: false
};

export const _LoadingButton = Template.bind({});
_LoadingButton.args = {
  loading: true
};