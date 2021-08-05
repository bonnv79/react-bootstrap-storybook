import React from 'react';
import { Paginations } from '../index';

export default {
  title: 'components/Paginations',
  component: Paginations,
  argTypes: {},
};

const Template = ({ config = 5, ...args }) => {
  const [value, setValue] = React.useState(args.activeIndex);
  return (
    <>
      <Paginations {...args} config={Number(config)} activeIndex={value} onChange={setValue} />
      <div>activeIndex: {value}</div>
    </>
  );
};

export const _Paginations = Template.bind({});
_Paginations.args = {
  count: 200,
  activeIndex: 0,
  pageSize: 10,
  config: 5,
};
