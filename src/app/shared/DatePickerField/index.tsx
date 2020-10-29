import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import './date-picker-field.scss';

DatePickerField.propTypes = {
  field: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

DatePickerField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
};

function DatePickerField(props: any) {
  const { field, onChange, label, disabled } = props;
  const { name, value } = field;

  return (
    <FormGroup>
      {label && <label htmlFor={name}>{label}</label>}

      <DatePicker
          id={name}
          {...field}
          selected={(value && new Date(value)) || null}
          onChange={val => onChange(name, val)}
          className = {`custom-input text-input ${!value && !disabled ? 'error' : ''}`}
          disabled={disabled}
      />
    </FormGroup>
  );
}

export default DatePickerField;
