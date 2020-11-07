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
  const { field, options, label, placeholder, disabled, form} = props;
  const { name, value } = field;
  const { errors, touched } = form;

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
        {...field} // name, value, onchange, onblur
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
        styles={{
          control: (base: any) => ({
            ...base,
            borderColor: errors[name] && touched[name] ? 'red' : 'hsl(0,0%,80%)',
          })
        }}
      />

    {touched[name] && <span className='required-msg' dangerouslySetInnerHTML= {{__html: errors[name]}}/>}
    </FormGroup>
  );
}

export default SelectField;
