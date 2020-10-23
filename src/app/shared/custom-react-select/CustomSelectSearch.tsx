import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { AdditionAllOption } from "../../../common/constants/CommonConst";
import './CustomSelectSearch.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown} from "@fortawesome/free-solid-svg-icons";

const CustomSelectSearch = (props: any) => {
    const [options, setOptions] = useState(props.includeAllCheckbox ? [props.allSelectOption, ...props.options] : props.options);
    const [originalOptions, setOriginalOptions] = useState(options);
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [showDropDown, setShowDropDown] = useState(false);
    const [disableOnSaveButton, setDisableOnSaveButton] = useState(props.defaultSelectedAllCheckbox ? true : false);
    const [searchText, setSearchText] = useState('');
    const [selectedValue, setSelectedValue] = useState(props.defaultSelectedAllCheckbox ? [props.allSelectOption] : []);
    const componentRef = useRef(null);
    const [randomNumber, setRandomNumber] = useState(_.random(0, 9999999));
    const [isFirst, setIsFirst] = useState(true);

    useEffect(() => {
        const option = props.includeAllCheckbox ? [props.allSelectOption, ...props.options] : props.options;
        setOptions(option);
        setOriginalOptions(option);
        setFilteredOptions(option);
    }, [props.options])

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        if (props.defaultSelectedAllCheckbox && isFirst) {
            updateSelectedAllCheckbox(props.allSelectOption, originalOptions, isFirst)
            setIsFirst(false);
        } else if (props.value && props.value.length > 0) {
            if (props.value.length == (originalOptions.length - 1)) {
                setSelectedValue(props.allSelectOption);
                updateSelectedAllCheckbox(props.allSelectOption, originalOptions);
            } else {
                const isSelectedAll = props.value.filter(item => item.value === props.allSelectOption.value).length > 0;
                if (isSelectedAll) {
                    updateSelectedAllCheckbox(props.allSelectOption, originalOptions);
                } else {
                    const option = originalOptions.filter((value) => {
                        return props.value.filter(item => item.value === value.value).length > 0;
                    });
                    setSelectedValue(option);
                    setOptions(option);
                    setFilteredOptions(option);
                }

            }
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [props.value])
    const removeSelectedValue = (option, currentOptions) => {
        const selected = currentOptions.filter(item => item.value !== option.value)
        setSelectedValue(selected);
    }

    const updateSelectedAllCheckbox = (data, currentOptions, first) => {
        if (typeof currentOptions === "string") {
            if (data.length == (originalOptions.length - 1)) {
                setSelectedValue([props.allSelectOption]);
                updateSelectedAllCheckbox(props.allSelectOption, originalOptions);
            } else {
                const isSelectedAll = data.filter(item => item.value === props.allSelectOption.value).length > 0;
                if (isSelectedAll) {
                    updateSelectedAllCheckbox(props.allSelectOption, originalOptions);
                } else {
                    const option = originalOptions.filter((value) => {
                        return props.value.filter(item => item.value === value.value).length > 0;
                    })
                    setSelectedValue(option);
                    setOptions(option);
                    setFilteredOptions(option);
                }

            }
            return;
        }
        const isSelectedAll = currentOptions.filter(item => item.value === props.allSelectOption.value).length;
        if (props.allSelectOption.value === data.value) {
            if (isSelectedAll || !currentOptions.length) {
                setSelectedValue(originalOptions);
                if (first) {
                    props.firstChangeValue(originalOptions.filter(item => item.value !== props.allSelectOption.value));
                }
            } else {
                setSelectedValue([]);
            }
        } else {
            if (isSelectedAll) {
                if (currentOptions.length < originalOptions.length) {
                    removeSelectedValue(props.allSelectOption, currentOptions)
                }
            } else {
                if (currentOptions.length === (originalOptions.length - 1)) {
                    setSelectedValue([...currentOptions, props.allSelectOption]);
                } else {
                    setSelectedValue(currentOptions);
                }
            }
        }
    }


    const onClickPlaceholderSection = () => {
        if (!props.disabled) {
            setShowDropDown(prevState => !prevState);
            reset();
        }
    }

    const onChangeCheckbox = (e, option) => {
        let currentOptions = [];
        if (e.target.checked) {
            const isNotContainsValue = selectedValue.filter(item => item.value !== option.value).length;
            if (selectedValue.length === 0 || isNotContainsValue) {
                currentOptions = [...selectedValue, option];
            }
        } else {
            currentOptions = selectedValue.filter(item => item.value !== option.value)
        }
        updateSelectedAllCheckbox(option, currentOptions);
        setDisableOnSaveButton(false);
    }

    const onSearchChange = (e) => {
        setSearchText(e.target.value)
        const filter = options.filter(
            option => option.label.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
        );
        setFilteredOptions(filter);
    }

    const onSave = () => {
        const hasSelectAll = selectedValue.filter(item => item.value === props.allSelectOption.value).length > 0;
        const savedOptions = selectedValue.filter(item => item.value !== props.allSelectOption.value);
        const currentOptions = selectedValue;
        setOptions(currentOptions);
        setFilteredOptions(currentOptions);
        if (_.isEmpty(currentOptions)) {
            setDisableOnSaveButton(true);
        } else {
            setDisableOnSaveButton(false);
        }
        setShowDropDown(false);
        if (props.onChange) {
            const element = {
                element: componentRef.current,
                name: props.name,
                options: options,
                selectedValueString: hasSelectAll ? props.allSelectOption.value : savedOptions.map(item => item.value)
            }
            props.onChange((hasSelectAll ? [props.allSelectOption] : savedOptions), element);
        }
        props.fetchData && props.fetchData();
    }

    const onClear = () => {
        setSearchText("");
        const filtered = originalOptions;
        setFilteredOptions(filtered);
        setOptions(filtered);
        setSelectedValue([]);
    }

    const reset = () => {
        setSearchText("");
        const filtered = originalOptions;
        updateSelectedAllCheckbox(props.value, "");
        setFilteredOptions(filtered);
        setDisableOnSaveButton(true);
        setOptions(filtered);
    }

    const hiddenDropDown = (e: any, dropDownRef: any) => {
        if (dropDownRef.current) {
            if (!dropDownRef.current ?.contains(e.target) && dropDownRef.current ?.getElementsByClassName("hiddenClass").length == 0) {
                setShowDropDown(false);
                reset();
            }
        }
    }

    const handleOutsideClick = (e: any) => {
        hiddenDropDown(e, componentRef);
    }

    const optionsListComponent = () => {
        return (
            <div className="select-menu-outer">
                <ul className="menu-items">
                    {filteredOptions.map((option: any, index: number) => {
                        let labelTooltip = props.showTooltip ? { title: option.label } : {};
                        const isChecked = selectedValue.filter(item => item.value === option.value).length > 0;
                        return (
                            <li key={index} className="d-flex align-items-center">
                                <input
                                    className="check-box"
                                    type="checkbox"
                                    onChange={e => onChangeCheckbox(e, option)}
                                    checked={isChecked}
                                    id={"checkbox_id_" + randomNumber + option.value}
                                />
                                <label
                                    className="check-label"
                                    htmlFor={"checkbox_id_" + randomNumber + option.value}
                                    title={option.label}
                                >
                                    <span {...labelTooltip}>{option.label}</span>
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }

    const renderPlaceHolder = () => {
        const isSelectedAll = selectedValue.filter(item => item.value === props.allSelectOption.value).length > 0;
        if (selectedValue.length === originalOptions.length || isSelectedAll)
            return props.allSelectOption.label;
        else if (selectedValue.length === 1)
            return selectedValue[0].label
        else if (selectedValue.length > 1)
            return "Selected " + selectedValue.length + " item" + (selectedValue.length > 1 ? "s" : "")
        return props.placeHolder;
    }


    return (
        <div
            className={`${props.className ? props.className + " " : ''}multi-select-checkbox-save-searchable-component`}
            ref={componentRef}>
            <div
                className={props.disabled ? 'placeholder-section disabled-placeholder-section' : showDropDown ? 'placeholder-section placeholder-section-show-dropdown' : 'placeholder-section'}
                onClick={onClickPlaceholderSection}>
                <div className="placeholder-value">
                    {renderPlaceHolder()}
                </div>
                <div className ='icon-caretdown'>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>
                <div className="placeholder-icon align-self-center">
                    {props.disabled ? "" :
                        <i className={showDropDown ? "fa fa-caret-up" : "fas fa-caret-down"} aria-hidden="true" />}
                </div>
            </div>
            <div className={"wrapper-dropdown" + (showDropDown ? "" : " hiddenClass")}>
                <div className="wrapper-dropdown-inner">
                    <div className="search-section d-flex align-items-center border-bottom position-relative">
                        <input type="text" autoFocus className="text-truncate mt-1 mb-1 ml-1 mr-1 w-100"
                            onChange={onSearchChange} value={searchText} ref={(input) => { input?.focus() }}/>
                        <span className ='icon-search'> <FontAwesomeIcon icon={faSearch}/></span> 
                        <i className="fas fa-search position-absolute icon-for-text" aria-hidden="true" />
                    </div>
                    <div className="options">
                        {optionsListComponent()}
                        <div className="actions border-top">
                            {selectedValue.length === 0 || disableOnSaveButton ?
                                <span className="save-action disabled">Apply</span> :
                                <span className="save-action" onClick={onSave}>Apply</span>}
                            <span className="clear-action" onClick={onClear}>Clear</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CustomSelectSearch.defaultProps = {
    allSelectOption: AdditionAllOption[0],
    placeHolder: "Select...",
    options: []
}

CustomSelectSearch.propTypes = {
    placeHolder: PropTypes.string,
    includeAllCheckbox: PropTypes.bool,
    disabled: PropTypes.bool,
    showTooltip: PropTypes.bool,
    defaultSelectedAllCheckbox: PropTypes.bool,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    firstChangeValue: PropTypes.array,
    name: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired,
    allSelectOption: PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string
    }),
    className: PropTypes.string,
    fetchData: PropTypes.func
}
export default CustomSelectSearch;