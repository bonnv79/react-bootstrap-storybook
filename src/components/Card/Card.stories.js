import React from 'react';
import { Card } from '../index';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {},
};

const Template = (args) => {
  return <Card {...args} />;
};

export const _Card = Template.bind({});
_Card.args = {
  width: '18rem',
  header: 'Header',
  title: 'Card Title',
  body: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
}