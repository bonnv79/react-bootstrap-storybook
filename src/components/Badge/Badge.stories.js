import React from 'react';
import { Badge, badgeBgs, Button } from '../index';

export default {
  title: 'components/Badge',
  component: Badge,
  argTypes: {},
};

const colorByBg = {
  [badgeBgs.LIGHT]: badgeBgs.DARK
}

const Template = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {
        Object.values(badgeBgs).map(item => {
          const cbg = args.bg || item;
          return (
            <span key={item} style={{ margin: 8 }}>
              <Badge key={item} {...args} bg={cbg} text={colorByBg[cbg]}>
                {item}
              </Badge>
            </span>
          )
        })
      }
    </div>
  );
};

export const _Badge = Template.bind({});
_Badge.args = {};

const TemplateButton = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {
        Object.values(badgeBgs).map(item => {
          const cbg = args.bg || item;
          return (
            <span key={item} style={{ margin: 8 }}>
              <Badge key={item} {...args} bg={cbg} text={colorByBg[cbg]}>
                <Button variant="outline-primary">{item}</Button>
              </Badge>
            </span>
          )
        })
      }
    </div>
  );
};

export const _BadgeButton = TemplateButton.bind({});
_BadgeButton.args = {
  badge: '99',
  bg: undefined,
};
