import React, { useState } from 'react';
import { ButtonGroup } from '../index';

export default {
  title: 'components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {},
};

const options = [
  { name: 'Active', value: '1' },
  { name: 'Radio', value: '2' },
  { name: 'Radio', value: '3' },
];

const Template = (args) => {
  const [value, setValue] = useState('1');
  return <ButtonGroup {...args} value={value} onChange={setValue} />;
};

export const ButtonGroup_Story = Template.bind({});
ButtonGroup_Story.args = {
  options,
  name: 'toggle-button-group'
};
