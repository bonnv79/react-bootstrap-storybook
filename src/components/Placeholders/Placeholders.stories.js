import React from 'react';
import { Placeholders } from '../index';

export default {
  title: 'components/Placeholders',
  component: Placeholders,
  argTypes: {},
};

const Template = (args) => {
  return (
    <Placeholders {...args} >
      <span className="col-7"></span>
      <span className="col-4"></span>
      <span className="col-4"></span>
      <span className="col-6"></span>
      <span className="col-9"></span>
      <span className="col-4"></span>
      <span className="col-4"></span>
      <span className="col-3"></span>
    </Placeholders>
  );
};

export const _Placeholders = Template.bind({});
_Placeholders.args = {
  isMargin: false
};
