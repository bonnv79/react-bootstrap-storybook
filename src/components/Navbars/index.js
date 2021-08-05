import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, Nav } from 'react-bootstrap';

const navbarsBgs = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light'
}

const Navbars = ({ data, ...props }) => {

  return (
    <Navbar {...props}>
      <Container>
        <Navbar.Brand href="#home">
          {data.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              data.leftMenu.map((item, index) => <React.Fragment key={`key-${index}`}>{item}</React.Fragment>)
            }
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          {
            data.rightMenu.map((item, index) => <React.Fragment key={`key-${index}`}>{item}</React.Fragment>)
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Navbars.defaultProps = {
  data: {},
  bg: 'light',
  expand: "md",
};

Navbars.propTypes = {
  data: PropTypes.instanceOf(Object),
  bg: PropTypes.oneOf(Object.values(navbarsBgs)),
  expand: PropTypes.oneOf([true, 'sm', 'md', 'lg', 'xl', 'xxl']),
};

export default Navbars;
export { Navbars };