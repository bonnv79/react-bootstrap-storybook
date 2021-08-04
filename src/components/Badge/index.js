import React from 'react';
import PropTypes from 'prop-types';
import { Badge as BBadge } from 'react-bootstrap';

const badgeBgs = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light'
}

const Badge = ({ ...props }) => {
  return (
    <BBadge {...props} />
  );
};

Badge.defaultProps = {
  bg: badgeBgs.SECONDARY,
  pill: false,
  text: undefined
};

Badge.propTypes = {
  bg: PropTypes.oneOf(Object.values(badgeBgs)),
  pill: PropTypes.bool,
  text: PropTypes.oneOf(Object.values(badgeBgs))
};

export default Badge;
export { Badge, badgeBgs };