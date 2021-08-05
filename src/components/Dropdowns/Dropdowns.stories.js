import React from 'react';
import { Dropdowns } from '../index';

export default {
  title: 'components/Dropdowns',
  component: Dropdowns,
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
  return <Dropdowns {...args} value={value} onChange={setValue} />;
};

export const _Dropdowns = Template.bind({});
_Dropdowns.args = {
  data,
  value: ''
}