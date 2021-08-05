import React from 'react';
import PropTypes from 'prop-types';
import { Offcanvas } from 'react-bootstrap';
import './index.css';

const { Header, Title, Body } = Offcanvas;

const Canvas = ({ title, children, ...props }) => {

  return (
    <Offcanvas {...props}>
      <Header closeButton>
        <Title>{title}</Title>
      </Header>
      <Body>
        {children}
      </Body>
    </Offcanvas>
  );
};

Canvas.defaultProps = {
  show: false,
  title: '',
  children: '',
  placement: 'start',
  backdrop: true,
  scroll: false,
  backdropClassName: 'canvas-backdrop',
  onHide: () => { },
};

Canvas.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
  placement: PropTypes.oneOf(['start', 'end', 'top', 'bottom']),
  backdrop: PropTypes.bool,
  scroll: PropTypes.bool,
  backdropClassName: PropTypes.string,
  onHide: PropTypes.func,
};

export default Canvas;
export { Canvas };