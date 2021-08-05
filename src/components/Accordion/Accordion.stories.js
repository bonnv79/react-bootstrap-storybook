import React from 'react';
import { Accordion } from '../index';

export default {
  title: 'components/Accordion',
  component: Accordion,
  argTypes: {},
};

const options = [
  {
    id: '1',
    title: 'Accordion Item #1',
    component: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum. 1
      </div>
    )
  },
  {
    id: '2',
    title: 'Accordion Item #2',
    component: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum. 2
      </div>
    )
  },
];

const Template = (args) => {
  return <Accordion {...args} />;
};

export const _Accordion = Template.bind({});
_Accordion.args = {
  options,
  defaultActiveKey: '1'
};
