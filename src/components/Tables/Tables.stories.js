import React from 'react';
import { Tables } from '../index';

export default {
  title: 'components/Tables',
  component: Tables,
  argTypes: {},
};

const data = [
  {
    id: 'id-1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    id: 'id-2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    id: 'id-3',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: '#',
    dataIndex: 'stt',
    render: (value, row) => (row.rowIndex + 1)
  },
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const Template = (args) => {
  const [value, setValue] = React.useState('');
  return <Tables {...args} value={value} onChange={setValue} />;
};

export const _Tables = Template.bind({});
_Tables.args = {
  data,
  columns,
  rowKey: 'id',
  striped: true,
  bordered: true,
  hover: true,
  responsive: true,
  borderless: false,
  size: 'lg',
  variant: undefined,
};
