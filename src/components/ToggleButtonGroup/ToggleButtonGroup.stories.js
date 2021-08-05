import React, { useState } from 'react';
import { ToggleButtonGroup } from '../index';

export default {
  title: 'components/ToggleButtonGroup',
  component: ToggleButtonGroup,
  argTypes: {},
};

const Template = (args) => {
  const [value, setValue] = useState('1');
  return <ToggleButtonGroup {...args} value={value} onChange={setValue} />;
};

export const _ToggleButtonGroup = Template.bind({});
_ToggleButtonGroup.args = {
  options: [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ],
  name: 'toggle-button-group'
};
