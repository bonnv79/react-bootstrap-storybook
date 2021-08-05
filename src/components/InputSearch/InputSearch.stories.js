import React from 'react';
import { InputSearch } from '../index';

export default {
  title: 'components/InputSearch',
  component: InputSearch,
  argTypes: {},
};

const Template = (args) => {
  const [value, setValue] = React.useState('');
  const onSearch = (val) => {
    alert(`onChange value: ${val}`);
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return <>
    <InputSearch {...args} value={value} onChange={onChange} onSearch={onSearch} />
    <div>value: {value}</div>
  </>;
};

export const _InputSearch = Template.bind({});
_InputSearch.args = {

}