import React from 'react';
import { Loading } from '../index';

export default {
  title: 'components/Loading',
  component: Loading,
  argTypes: {},
};

const Template = (args) => {
  return <div>
    <Loading {...args} />
    <h1>Loading Demo</h1>
  </div>;
};

export const _Loading = Template.bind({});
_Loading.args = {
  open: true
};
