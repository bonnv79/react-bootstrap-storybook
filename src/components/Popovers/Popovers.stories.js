import React from 'react';
import { Popovers, Button } from '../index';

export default {
  title: 'components/Popovers',
  component: Popovers,
  argTypes: {},
};

const Template = (args) => {
  return <Popovers {...args} />;
};

export const _Popovers = Template.bind({});
_Popovers.args = {
  children: <Button>Click me to see</Button>,
  title: 'Popover right',
  component: (
    <div>
      And here's some <strong>amazing</strong> content. It's very engaging. right?
    </div>
  ),
  flip: true,
  placement: undefined,
  trigger: "click",
  backdrop: true,
};
