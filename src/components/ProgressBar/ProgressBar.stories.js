import React from 'react';
import { ProgressBar } from '../index';

export default {
  title: 'components/Progressbar',
  component: ProgressBar,
  argTypes: {},
};

const Template = (args) => {
  return (
    <>
      <h3>Default progress bar.</h3>
      <ProgressBar now={60} />
      <br />

      <h3>With label</h3>
      <ProgressBar now={60} label={`${60}%`} />
      <br />

      <h3>Contextual alternatives</h3>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
      <br />

      <h3>Striped</h3>
      <ProgressBar striped variant="success" now={40} />
      <ProgressBar striped variant="info" now={20} />
      <ProgressBar striped variant="warning" now={60} />
      <ProgressBar striped variant="danger" now={80} />
      <br />

      <h3>Animated</h3>
      <ProgressBar animated now={45} />
      <br />

      <h3>Stacked</h3>
      <ProgressBar>
        <ProgressBar striped variant="success" now={35} key={1} />
        <ProgressBar variant="warning" now={20} key={2} />
        <ProgressBar striped variant="danger" now={10} key={3} />
      </ProgressBar>
      <br />
    </>
  );
};

export const Progressbar = Template.bind({});
Progressbar.args = {

};
