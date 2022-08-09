import React from 'react';
import { Tables } from '../index';

export default {
  title: 'components/Tables',
  component: Tables,
  argTypes: {
    maxHeight: {
      description: 'Ex: 200px | 100vh',
    },
  },
};

const data = [
  {
    id: 'id-01',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    id: 'id-02',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    id: 'id-3333333333333333333333',
    name: 'This text is quite long, and will be truncated once displayed.',
    age: 42,
    address: '10 Downing Street, This text is quite long, and will be truncated once displayed.',
  },
];

for (let i = 1; i <= 22; i++) {
  data.push({
    id: 'id-' + i,
    name: 'Test ' + i,
    age: i,
    address: 'Test ' + i,
  })
}

const columns = [
  {
    title: 'STT',
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
  const onChange = (value, event, rowData) => {
    setValue(value);
  }
  const paginationColumns = [...args.columns];
  paginationColumns.shift();
  return (
    <Tables {...args} columns={args.pagination ? paginationColumns : args.columns} value={value} onChange={onChange} />
  );
};

export const _Tables = Template.bind({});
_Tables.args = {
  pagination: false,
  PaginationsProps: {
    size: 'sm',
    pageSize: 10
  },
  maxHeight: '',
  ellipsis: true,
  data,
  columns,
  rowKey: 'id',
  striped: true,
  bordered: true,
  hover: true,
  responsive: true,
  borderless: false,
  size: undefined,
  variant: undefined,
};
