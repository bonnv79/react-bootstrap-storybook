import React from 'react';
import { Dropdown } from '../index';

export default {
  title: 'components/Dropdown',
  component: Dropdown,
  argTypes: {},
};

const data = [];

for (let i = 1; i < 20; i += 1) {
  data.push({
    id: 'id-' + i,
    name: 'item ' + i,
    href: '#',
  })
};

const Template = (args) => {
  const [value, setValue] = React.useState(args.value);
  return <Dropdown {...args} value={value} onChange={setValue} />;
};

export const Dropdown_Story = Template.bind({});
Dropdown_Story.args = {
  data,
  value: ''
}