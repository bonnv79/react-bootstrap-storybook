import React from 'react';
import { Badge, badgeBgs } from '../index';

export default {
  title: 'components/Badge',
  component: Badge,
  argTypes: {},
};

const Template = (args) => {
  return Object.values(badgeBgs).map(item => (
    <span key={item} style={{ padding: 5 }}>
      <Badge key={item} {...args} bg={item}>{item}</Badge>
    </span>
  ));
};

export const _Badge = Template.bind({});
