import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as BTooltip, OverlayTrigger } from 'react-bootstrap';
import './index.css';

const tooltipPlacements = {
  AUTO_START: 'auto-start',
  AUTO: 'auto',
  AUTO_END: 'auto-end',
  TOP_START: 'top-start',
  TOP: 'top',
  TOP_END: 'top-end',
  RIGHT_START: 'right-start',
  RIGHT: 'right',
  RIGHT_END: 'right-end',
  BOTTOM_END: 'bottom-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  LEFT_END: 'left-end',
  LEFT: 'left',
  LEFT_START: 'left-start'
}

const Tooltip = ({ children, title, containerClassName, ...props }) => {

  return (
    <OverlayTrigger
      overlay={
        <BTooltip>
          {title || children}
        </BTooltip>
      }
      {...props}
    >
      <div className={containerClassName}>
        {children}
      </div>
    </OverlayTrigger>
  );
};

Tooltip.defaultProps = {
  children: '',
  title: '',
  flip: true,
  placement: undefined,
  containerClassName: 'tooltip-container'
};

Tooltip.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  flip: PropTypes.bool,
  placement: PropTypes.oneOf(Object.values(tooltipPlacements)),
  containerClassName: PropTypes.string
};

export default Tooltip;
export { Tooltip, tooltipPlacements };