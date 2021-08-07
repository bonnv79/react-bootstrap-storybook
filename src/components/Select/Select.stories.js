import React from 'react';
import { Select } from '../index';

export default {
  title: 'components/Select',
  component: Select,
  argTypes: {},
};

const data = [
  {
    id: '1',
    name: 'item 1'
  },
  {
    id: '2',
    name: 'item 2'
  },
  {
    id: '3',
    name: 'item 3'
  },
  {
    id: '4',
    name: 'item 4'
  },
  {
    id: '5',
    name: 'item 5',
    disabled: true
  },
];

const Template = (args) => {
  const [value, setValue] = React.useState('1');

  return <React.Fragment>
    <Select {...args} value={value} onChange={setValue} />
    <div>value: {value}</div>
  </React.Fragment>;
};

export const _Select = Template.bind({});
_Select.args = {
  data,
  disabled: false,
};
