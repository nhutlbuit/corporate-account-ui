import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup } from 'react-bootstrap';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
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
    type, label, placeholder, disabled,
  } = props;
  const { name } = field;
  const { errors, touched } = form;

  return (
    <FormGroup>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        {...field}
        className={errors[name] && touched[name] ? 'text-input error' : 'text-input'}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default InputField;
