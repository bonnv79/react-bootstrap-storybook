import React from 'react';
import { Loading, Button } from '../index';

export default {
  title: 'components/Loading',
  component: Loading,
  argTypes: {},
};

const Template = (args) => {
  const [loading, setLoading] = React.useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <div>
      <Loading {...args} open={args.open ? args.open : loading} />
      <Button onClick={handleLoading}>Show Loading</Button>
    </div>
  );
};

export const _Loading = Template.bind({});
_Loading.args = {
  open: undefined
};
