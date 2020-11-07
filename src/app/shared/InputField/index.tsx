import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup } from 'react-bootstrap';
import './input-field.scss';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

function InputField(props: any) {
  const {
    field, form,
    type, label, placeholder, disabled
  } = props;
  const { name } = field;
  const { errors, touched } = form;

  return (
    <FormGroup className='input-field'>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        {...field}
        className = {`custom-input ${errors[name] && touched[name] && !disabled ? 'required-input-field' : ''}`}
        type={type ? type : 'text'}
        disabled={disabled}
        placeholder={placeholder}
      />

      {touched[name] && <span className='required-msg' dangerouslySetInnerHTML= {{__html: errors[name]}}/>}
    </FormGroup>
  );
}

export default InputField;
