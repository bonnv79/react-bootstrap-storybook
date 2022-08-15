import React from 'react';
import { Space, Button } from '../index';

export default {
  title: 'components/Space',
  component: Space,
  argTypes: {
    size: {
      description: "'sm' | 'lg' | length units",
    },
  },
};

const Template = (args) => {
  return (
    <Space {...args}>

      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
      <Button>Button 5</Button>
      <Button>Button 6</Button>
      <Button>Button 7</Button>
      {
        args.align && (
          <span style={{ padding: '32px 8px 16px', background: '#96969633' }}>
            Block
          </span>
        )
      }
    </Space>
  );
};

export const _Space = Template.bind({});
_Space.args = {
};
