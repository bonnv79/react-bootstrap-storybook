import React from 'react';
import { Typography, typographyBg, typographyColor } from '../index';

export default {
  title: 'components/Typography',
  component: Typography,
  argTypes: {},
};

const bgByColor = {
  [typographyColor.LIGHT]: typographyBg.DARK,
  [typographyColor.WHITE]: typographyBg.DARK,
  [typographyColor.WHITE_50]: typographyBg.DARK,
}

const colorByBg = {
  [typographyBg.DARK]: typographyColor.WHITE,
  [typographyBg.PRIMARY]: typographyColor.WHITE,
  [typographyBg.SECONDARY]: typographyColor.WHITE,
  [typographyBg.SUCCESS]: typographyColor.WHITE,
  [typographyBg.DANGER]: typographyColor.WHITE,
  [typographyBg.WARNING]: typographyColor.WHITE,
  [typographyBg.INFO]: typographyColor.WHITE,
}

const Template = (args) => {
  return Object.values(typographyColor).map(color => (
    <Typography key={color} {...args} bg={args.bg || bgByColor[color]} color={args.color || color}>{color}</Typography>
  ))
};

export const _Typography = Template.bind({});
_Typography.args = {
  ellipsis: false,
  align: undefined,
  transform: undefined,
  size: undefined,
};

const TemplateBg = (args) => {
  return Object.values(typographyBg).map(bg => (
    <Typography key={bg} {...args} bg={args.bg || bg} color={args.color || colorByBg[bg]}>{bg}</Typography>
  ))
};

export const _TypographyBg = TemplateBg.bind({});
_TypographyBg.args = {
  ellipsis: false,
  align: undefined,
  transform: undefined,
  size: undefined,
};

const TemplateEllipsis = (args) => {
  return (
    <Typography {...args}>
      For longer content, you can add a .text-truncate class to truncate the text with an ellipsis. This text is quite long, and will be truncated once displayed.
    </Typography>
  );
};

export const _TemplateEllipsis = TemplateEllipsis.bind({});
_TemplateEllipsis.args = {
  ellipsis: true,
  align: undefined,
  transform: undefined,
  size: undefined,
};
