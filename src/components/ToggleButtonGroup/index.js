import React from 'react';
import PropTypes from 'prop-types';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const toggleButtonGroupVariant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
  LIGHT: 'light',
  LINK: 'link'
};

const toggleButtonGroupType = {
  RADIO: 'radio',
  CHECKBOX: 'checkbox'
};

const ToggleButtonGroupB = ({
  options,
  value,
  name,
  onChange,
  type,
  variant,
  labelKey,
  valueKey,
  ...props
}) => {
  return (
    <ToggleButtonGroup type={type} name={name} value={value} onChange={onChange} {...props}>
      {options.map((radio) => {
        const optId = radio[valueKey];
        return (
          <ToggleButton
            key={optId}
            id={`option-${optId}`}
            type={type}
            variant={`outline-${variant}`}
            name="option-name"
            value={optId}
          >
            {radio[labelKey]}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

ToggleButtonGroupB.defaultProps = {
  type: toggleButtonGroupType.RADIO,
  variant: toggleButtonGroupVariant.PRIMARY,
  labelKey: 'name',
  valueKey: 'value',
  options: [],
  name: 'toggle-button-group',
  value: '',
  onChange: () => { },
};

ToggleButtonGroupB.propTypes = {
  type: PropTypes.oneOf(Object.values(toggleButtonGroupType)),
  variant: PropTypes.oneOf(Object.values(toggleButtonGroupVariant)),
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  options: PropTypes.arrayOf(Object),
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]),
  onChange: PropTypes.func
};

export default ToggleButtonGroupB;
export { ToggleButtonGroupB as ToggleButtonGroup, toggleButtonGroupVariant };