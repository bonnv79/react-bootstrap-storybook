import React from 'react';
import { Tooltip, Button } from '../index';

export default {
  title: 'components/Tooltip',
  component: Tooltip,
  argTypes: {},
};

const Template = (args) => {
  return (
    <Tooltip {...args} >
      <Button>Hover to see</Button>
    </Tooltip>
  );
};

export const _Tooltip = Template.bind({});
_Tooltip.args = {
  title: 'Tooltip Title',
  flip: true,
  placement: undefined,
};
