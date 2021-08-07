import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import _keyBy from 'lodash/keyBy';

let CheckboxGroup = ({ data, name, inline, value, onChange, ...props }) => {
  let objectValue = React.useMemo(() => _keyBy(value), [value]);

  const handleOnCLick = (id) => (e) => {
    if (objectValue[id]) {
      delete objectValue[id];
    } else {
      objectValue[id] = id;
    }
    onChange(Object.values(objectValue), e);
  }

  return (
    <div className="mb-3">
      {
        data.map(item => (
          <Form.Check
            key={item.id}
            id={item.id}
            label={item.name}
            inline={inline}
            name={name}
            disabled={item.disabled}
            checked={objectValue[item.id]}
            onChange={handleOnCLick(item.id)}
            {...props}
          />
        ))
      }
    </div>
  );
};

CheckboxGroup.defaultProps = {
  data: [],
  type: 'checkbox',
  name: 'checkbox-group-name',
  inline: true,
  value: [],
  onChange: () => { },
};

CheckboxGroup.propTypes = {
  data: PropTypes.arrayOf(Object),
  type: PropTypes.oneOf(['checkbox', 'switch']),
  name: PropTypes.string,
  inline: PropTypes.bool,
  value: PropTypes.instanceOf(Array),
  onChange: PropTypes.func,
};

CheckboxGroup = React.memo(CheckboxGroup)

export default CheckboxGroup;
export { CheckboxGroup };