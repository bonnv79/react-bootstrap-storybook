import React from 'react';
import { CheckboxGroup } from '../index';

export default {
  title: 'components/Checkboxgroup',
  component: CheckboxGroup,
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
  const [value, setValue] = React.useState(['1', '2']);

  return <React.Fragment>
    <CheckboxGroup {...args} value={value} onChange={setValue} />
    <div>{JSON.stringify(value, undefined, 2)}</div>
  </React.Fragment>;
};

export const _Checkboxgroup = Template.bind({});
_Checkboxgroup.args = {
  data,
  type: 'checkbox',
  inline: true
};
