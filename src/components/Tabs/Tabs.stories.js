import React from 'react';
import { Tabs } from '../index';

export default {
  title: 'components/Tabs',
  component: Tabs,
  argTypes: {},
};

const tabs = [
  {
    eventKey: 'tab1',
    title: 'Tab 1',
    component: <div>tab 1</div>
  },
  {
    eventKey: 'tab2',
    title: 'Tab 2',
    component: <div>tab 2</div>
  },
  {
    eventKey: 'tab3',
    title: 'Tab 3',
    component: <div>tab 3</div>,
    disabled: true,
  }
]

const Template = (args) => {
  return <Tabs {...args} />;
};

export const _Tabs = Template.bind({});
_Tabs.args = {
  tabs,
  defaultActiveKey: 'tab1',
  vertical: false,
};
