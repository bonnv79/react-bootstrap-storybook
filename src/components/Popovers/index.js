import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import './index.css';

const popoversPlacements = {
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

const Popovers = ({ children, title, component, containerClassName, ...props }) => {
  const popover = (
    <Popover>
      {title && (
        <Popover.Header as="h3">{title}</Popover.Header>
      )}
      {component && (
        <Popover.Body>
          {component}
        </Popover.Body>
      )}
    </Popover>
  );

  return (
    <OverlayTrigger
      overlay={
        popover
      }
      {...props}
    >
      <div className={containerClassName}>
        {children}
      </div>
    </OverlayTrigger>
  );
};

Popovers.defaultProps = {
  children: '',
  title: '',
  component: '',
  flip: true,
  placement: undefined,
  trigger: "click", // 'hover', 'click', 'focus'
  containerClassName: 'popovers-container'
};

Popovers.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  component: PropTypes.any,
  flip: PropTypes.bool,
  placement: PropTypes.oneOf(Object.values(popoversPlacements)),
  trigger: PropTypes.oneOfType([PropTypes.oneOf(['hover', 'click', 'focus']), PropTypes.instanceOf(Array)]),
  containerClassName: PropTypes.string
};

export default Popovers;
export { Popovers };