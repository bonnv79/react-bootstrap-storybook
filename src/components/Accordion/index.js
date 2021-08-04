import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as BAccordion } from 'react-bootstrap';

const { Item, Header, Body, } = BAccordion;

const Accordion = ({ options, ...props }) => {

  return (
    <BAccordion {...props}>
      {
        options.map(item => (
          <Item key={item.id} eventKey={item.id}>
            <Header>{item.title}</Header>
            <Body>
              {item.component}
            </Body>
          </Item>
        ))
      }
    </BAccordion>
  );
};

Accordion.defaultProps = {
  options: [],
  defaultActiveKey: '',
  flush: false,
};

Accordion.propTypes = {
  options: PropTypes.arrayOf(Object),
  defaultActiveKey: PropTypes.string,
  flush: PropTypes.bool,
};

export default Accordion;
export { Accordion };