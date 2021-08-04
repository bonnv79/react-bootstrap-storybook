import React from 'react';
import PropTypes from 'prop-types';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const buttonGroupVariant = {
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

const buttonGroupType = {
  RADIO: 'radio',
  CHECKBOX: 'checkbox'
};

const ButtonGroup = ({
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

ButtonGroup.defaultProps = {
  type: buttonGroupType.RADIO,
  variant: buttonGroupVariant.PRIMARY,
  labelKey: 'name',
  valueKey: 'value',
  options: [],
  name: 'toggle-button-group',
  value: '',
  onChange: () => { },
};

ButtonGroup.propTypes = {
  type: PropTypes.oneOf(Object.values(buttonGroupType)),
  variant: PropTypes.oneOf(Object.values(buttonGroupVariant)),
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  options: PropTypes.arrayOf(Object),
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]),
  onChange: PropTypes.func
};

export default ButtonGroup;
export { ButtonGroup, buttonGroupVariant };