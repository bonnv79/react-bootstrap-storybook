import React from 'react';
import { Navbars, Nav, NavDropdown, InputSearch, Form, Dropdown } from '../index';

export default {
  title: 'components/Navbars',
  component: Navbars,
  argTypes: {},
};

const Template = (args) => {
  return (<Navbars {...args} />);
};

export const _Navbars = Template.bind({});
_Navbars.args = {
  data: {
    title: 'React-Bootstrap',
    leftMenu: [
      <Nav.Link href="#home">Home</Nav.Link>,
      <Nav.Link href="#link">Link</Nav.Link>,
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>,
    ],
    rightMenu: [
      <Form className="d-flex" style={{ paddingRight: 10 }}>
        <InputSearch
          className="mr-2"
          size="sm"
        />
      </Form>,
      <Dropdown>
        <Dropdown.Toggle size="sm" variant="light" id="dropdown-basic">
          <i className="bi bi-person"></i> User Name
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    ]
  }
};
