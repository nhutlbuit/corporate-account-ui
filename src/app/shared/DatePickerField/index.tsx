import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import './date-picker-field.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

DatePickerField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

DatePickerField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false
};

function DatePickerField(props: any) {
  const { field, onChange, label, disabled, form} = props;
  const { name, value } = field;
  const { errors, touched } = form;

  return (
    <FormGroup className='date-picker-field'>
      {label && <label htmlFor={name}>{label}</label>}

      <label className='calendar-container'>
        <DatePicker
            id={name}
            {...field}
            type='text'
            selected={(value && new Date(value)) || null}
            onChange={val => onChange(name, val)}
            className = {`custom-input ${errors[name] && touched[name] ? ' required-input-field' : ''}`}
            disabled={disabled}
        />
        <div className='calendar-alt'><FontAwesomeIcon icon={faCalendarAlt} size='lg'/></div>
      </label>
    </FormGroup>
  );
}

export default DatePickerField;
