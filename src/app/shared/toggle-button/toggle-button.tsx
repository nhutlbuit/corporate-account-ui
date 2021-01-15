import PropTypes from 'prop-types';
import React from 'react';
import './toggle-button.scss';

ToggleButton.propTypes = {
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    small: PropTypes.bool,
    field: PropTypes.object.isRequired,
};

ToggleButton.defaultProps = {
    disabled: false,
    optionLabels: ['Yes', 'No']
};

function ToggleButton(props: any) {
    const {disabled, defaultChecked, field, small, optionLabels} = props;
    const { name } = field;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const changeEvent = {
          target: {
            name: name,
            value: (event.target as HTMLInputElement).checked
          }
        };
        field.onChange(changeEvent);
    };

    return (
        <div className={'toggle-switch' + (small ? ' small-switch' : '')}>
            <input type='checkbox' id={name} name={name} onClick={handleClick} className='toggle-switch-checkbox' defaultChecked={defaultChecked} disabled={disabled}/>
            {name ? (
                    <label className='toggle-switch-label' tabIndex={disabled ? -1 : 1} htmlFor={name}>
                          <span data-yes={optionLabels[0]} data-no={optionLabels[1]} tabIndex={-1} className={disabled ? 'toggle-switch-inner toggle-switch-disabled' : 'toggle-switch-inner'}/>
                          <span tabIndex={-1} className={disabled ? 'toggle-switch-switch toggle-switch-disabled' : 'toggle-switch-switch'} />
                    </label>
                    )
                    :
                    null
            }
        </div>
    );
}

export default ToggleButton;
