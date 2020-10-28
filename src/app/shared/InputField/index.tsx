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
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        {...field}

        type={type}
        disabled={disabled}
        placeholder={placeholder}

        invalid={showError}
      />
    </FormGroup>
  );
}

export default InputField;
