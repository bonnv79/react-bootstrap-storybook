import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Popover, Modal } from 'react-bootstrap';
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

const Popovers = ({
  children,
  title,
  component,
  containerClassName,
  backdrop: propBackdrop,
  onHide,
  trigger,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const backdrop = trigger === 'click' && propBackdrop;

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
    <>
      <OverlayTrigger
        show={backdrop ? open : undefined}
        overlay={
          popover
        }
        onHide={onHide}
        trigger={trigger}
        {...props}
      >
        <div
          className={containerClassName}
          onClick={() => backdrop && setOpen(!open)}
        >
          {children}
        </div>
      </OverlayTrigger>
      {
        backdrop && (
          <Modal
            show={open}
            onHide={() => {
              setOpen(false);
              onHide();
            }}
            animation={false}
            dialogClassName="popovers-dialog"
            backdropClassName="popovers-backdrop"
          />
        )
      }
    </>
  );
};

Popovers.defaultProps = {
  children: '',
  title: '',
  component: '',
  flip: true,
  placement: undefined,
  trigger: "click", // 'hover', 'click', 'focus'
  containerClassName: 'popovers-container',
  backdrop: true,
  onHide: () => { }
};

Popovers.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  component: PropTypes.any,
  flip: PropTypes.bool,
  placement: PropTypes.oneOf(Object.values(popoversPlacements)),
  trigger: PropTypes.oneOfType([PropTypes.oneOf(['hover', 'click', 'focus']), PropTypes.instanceOf(Array)]),
  containerClassName: PropTypes.string,
  backdrop: PropTypes.bool,
  onHide: PropTypes.func,
};

export default Popovers;
export { Popovers };