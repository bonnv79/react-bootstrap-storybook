import React from 'react';
import { Tooltip, Button } from '../index';

export default {
  title: 'components/Tooltip',
  component: Tooltip,
  argTypes: {},
};

const Template = (args) => {
  return <Tooltip {...args} />;
};

export const _Tooltip = Template.bind({});
_Tooltip.args = {
  children: <Button>Hover to see</Button>,
  title: 'Tooltip Title',
  flip: true,
  placement: undefined,
};
