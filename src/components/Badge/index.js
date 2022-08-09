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

const Badge = ({ children, badge, className, ...props }) => {
  if (badge) {
    return (
      <div className="position-relative" >
        <BBadge
          className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${className}`}
          {...props}
        >
          {badge}
          <span className="visually-hidden" />
        </BBadge>
        {children}
      </div >
    )
  }

  return (
    <BBadge className={className} {...props}>
      {children}
    </BBadge>
  );
};

Badge.defaultProps = {
  className: '',
  bg: badgeBgs.SECONDARY,
  pill: false,
  text: undefined,
  badge: undefined,
};

Badge.propTypes = {
  className: PropTypes.string,
  bg: PropTypes.oneOf(Object.values(badgeBgs)),
  pill: PropTypes.bool,
  text: PropTypes.oneOf(Object.values(badgeBgs)),
  badge: PropTypes.any
};

export default Badge;
export { Badge, badgeBgs };