import React from 'react';
import PropTypes from 'prop-types';

const typographyColor = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  LIGHT: 'light',
  DARK: 'dark',
  BODY: 'body',
  MUTED: 'muted',
  WHITE: 'white',
  BLACK_50: 'black-50',
  WHITE_50: 'white-50',
};

const typographyBg = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  LIGHT: 'light',
  DARK: 'dark',
  BODY: 'body',
  WHITE: 'white',
};

const typographyAlign = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
};

const typographyTransform = {
  LOWERCASE: 'lowercase',
  UPPERCASE: 'uppercase',
  CAPITALIZE: 'capitalize',
};

const typographySize = {
  FS_1: '1',
  FS_2: '2',
  FS_3: '3',
  FS_4: '4',
  FS_5: '5',
  FS_6: '6',
};

const Typography = ({
  className,
  bg,
  color,
  align,
  transform,
  size,
  ellipsis,
  ...props
}) => {
  const bgClassName = bg ? `bg-${bg}` : '';
  const colorClassName = color ? `text-${color}` : '';
  const alignClassName = align ? `text-${align}` : '';
  const transformClassName = transform ? `text-${transform}` : '';
  const sizeClassName = size ? `fs-${size}` : '';
  const ellipsisClassName = ellipsis ? 'text-truncate' : '';

  return (
    <p
      className={`
        ${bgClassName} 
        ${colorClassName} 
        ${alignClassName} 
        ${transformClassName} 
        ${sizeClassName} 
        ${ellipsisClassName}
        ${className}
      `}
      {...props}
    />
  );
};

Typography.defaultProps = {
  className: '',
  color: undefined,
  bg: undefined,
  align: undefined,
  transform: undefined,
  size: undefined,
  ellipsis: false,
};

Typography.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(typographyColor)),
  bg: PropTypes.oneOf(Object.values(typographyBg)),
  align: PropTypes.oneOf(Object.values(typographyAlign)),
  transform: PropTypes.oneOf(Object.values(typographyTransform)),
  size: PropTypes.oneOf(Object.values(typographySize)),
  ellipsis: PropTypes.bool,
};

export default Typography;
export { Typography, typographyColor, typographyBg, typographyAlign, typographyTransform, typographySize };