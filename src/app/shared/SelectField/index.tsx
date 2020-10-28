import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import {FormGroup} from 'react-bootstrap';

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  options: [],
};

function SelectField(props: any) {
  const { field, options, label, placeholder, disabled, styles} = props;
  const { name, value } = field;

  const selectedOption = options.find((option: any) => option.value === value);

  const handleSelectedOptionChange = (selectedOption: any) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue
      }
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <label htmlFor={name}>{label}</label>}

      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
        styles={styles}
      />
    </FormGroup>
  );
}

export default SelectField;
