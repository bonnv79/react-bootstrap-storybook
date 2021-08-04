import React, { useState } from 'react';
import { ToggleButtonGroup } from '../index';

export default {
  title: 'components/ToggleButtonGroup',
  component: ToggleButtonGroup,
  argTypes: {},
};

const options = [
  { name: 'Active', value: '1' },
  { name: 'Radio', value: '2' },
  { name: 'Radio', value: '3' },
];

const Template = (args) => {
  const [value, setValue] = useState('1');
  return <ToggleButtonGroup {...args} value={value} onChange={setValue} />;
};

export const ToggleButtonGroup_Story = Template.bind({});
ToggleButtonGroup_Story.args = {
  options,
  name: 'toggle-button-group'
};
