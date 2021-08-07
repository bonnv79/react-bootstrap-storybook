import React from 'react';
import PropTypes from 'prop-types';
import { FormSelect } from 'react-bootstrap';

let Select = ({ data, onChange, ...props }) => {
  const handleOnChange = (e) => {
    onChange(e.target.value, e);
  }

  return (
    <FormSelect onChange={handleOnChange} {...props}>
      {
        data.map(item => (
          <option
            key={item.id}
            value={item.id}
            disabled={item.disabled}
          >
            {item.name}
          </option>
        ))
      }
    </FormSelect>
  );
};

Select.defaultProps = {
  data: [],
  disabled: false,
  value: '',
  onChange: () => { },
};

Select.propTypes = {
  data: PropTypes.arrayOf(Object),
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Select = React.memo(Select)

export default Select;
export { Select };