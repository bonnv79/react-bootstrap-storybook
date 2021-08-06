import React from 'react';
import { ListGroup } from '../index';

export default {
  title: 'components/Listgroup',
  component: ListGroup,
  argTypes: {},
};

const Template = (args) => {
  const [value, setValue] = React.useState('');
  return <ListGroup {...args} value={value} onChange={setValue} />;
};

export const Listgroup = Template.bind({});
Listgroup.args = {
  data: [
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
  ],
  action: true,
  flush: false,
}