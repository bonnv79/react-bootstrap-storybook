import React from 'react';
import { Breadcrumb } from '../index';

export default {
  title: 'components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {},
};

const data = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Library',
    href: '#'
  },
  {
    title: 'Data',
    href: '#'
  }
]

const Template = (args) => {
  return <Breadcrumb {...args} />;
};

export const _Breadcrumb = Template.bind({});
_Breadcrumb.args = {
  data
}