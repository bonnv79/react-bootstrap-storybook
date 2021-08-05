import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup as BListGroup } from 'react-bootstrap';

const { Item } = BListGroup;

const ListGroup = ({ action, data, value, onChange, flush, ...props }) => {

  const handleOnChange = (val) => (e) => {
    if (action) {
      onChange(val, e);
    }
  }

  return (
    <BListGroup variant={flush ? 'flush' : undefined} {...props}>
      {
        data.map(item => (
          <Item
            key={item.id}
            action={action}
            active={action && item.id === value}
            disabled={item.disabled}
            onClick={handleOnChange(item.id)}
          >
            {item.name}
          </Item>
        ))
      }
    </BListGroup>
  );
};

ListGroup.defaultProps = {
  action: true,
  data: [],
  value: '',
  horizontal: null,
  flush: false,
  onChange: () => { },
};

ListGroup.propTypes = {
  action: PropTypes.bool,
  data: PropTypes.arrayOf(Object),
  value: PropTypes.string,
  horizontal: PropTypes.oneOf([true, 'sm', 'md', 'lg', 'xl', 'xxl']),
  flush: PropTypes.bool,
  onChange: PropTypes.func,
};

export default ListGroup;
export { ListGroup };