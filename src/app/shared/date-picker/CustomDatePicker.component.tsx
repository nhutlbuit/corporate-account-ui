import React, {useState} from 'react';
import './CustomDatePicker.component.scss';
import DatePicker from 'react-date-picker';
import PropTypes from 'prop-types';
import { stringToDate } from '../DateUtils';
import SVG from '../SVGRender';

const CustomDatePicker = (props: any) => {
    const {onChange, name, dayPlaceHolder, monthPlaceholder, yearPlaceholder, defaultView, locale, maxDate, minDate, value, format, onCloseAction, className} = props;
    const [currentView, setCurrentView] = useState(defaultView);
    const [activeStartDate, setActiveStartDate] = useState(value);
    const [isOpen, setIsOpen] = useState(false);
    const onViewChange = (view: any) => {
        setCurrentView(view);
    };

    const onCalendarClose = () => {
        setCurrentView(defaultView);
        setActiveStartDate(value);
        if (isOpen) onCloseAction && onCloseAction();
        setIsOpen(false);
    };

    const onActiveStartDateChange = (activeStartDate: any) => {
        setActiveStartDate(activeStartDate);
    };

    const onCalendarOpen = () => {
        setIsOpen(true);
    };

    const onKeyUp = (e: any) => {
        switch (e.key) {
            case 'Enter':
                onCloseAction && onCloseAction();
                setIsOpen(false);
                break;
            case 'Escape':
                onChange('', name);
                break;
        }
    };

    const onKeyDown = (e: any) => {
        const {target: input, key} = e;
        if (key === 'Backspace' && input.value.length === 0) {
            const property = 'previousElementSibling';
            const nextInput = findInput(input, property);
            focus(nextInput);
        }
    };

    const isValidInput = (element: any) => {
        return element.tagName === 'INPUT' && element.type === 'number';
    };

    const findInput = (element: any, property: any) => {
        let nextElement = element;
        do {
            nextElement = nextElement[property];
        } while (nextElement && !isValidInput(nextElement));
        return nextElement;
    };

    const focus = (element: any) => {
        if (element) {
            element.focus();
        }
    };

    return (
        <DatePicker
            onChange={(e) => {
                onChange(e, name);
            }}
            activeStartDate={stringToDate(activeStartDate)}
            format={format}
            dayPlaceholder={dayPlaceHolder}
            monthPlaceholder={monthPlaceholder}
            yearPlaceholder={yearPlaceholder}
            // onKeyUp={onKeyUp}
            // onKeyDown={onKeyDown}
            onCalendarClose={onCalendarClose}
            onCalendarOpen={onCalendarOpen}
            onActiveStartDateChange={onActiveStartDateChange}
            showLeadingZeros={false}
            onViewChange={onViewChange}
            isOpen={isOpen}
            view={currentView}
            className={className}
            calendarIcon={
                <SVG width='12'
                     height='12'
                     viewBox='0 0 12 12'
                     fill='230B1422'
                     d='M10.125 12c.313 0
                    .578-.11.797-.328.219-.219.328-.485.328-.797v-8.25c0-.313-.11-.578-.328-.797-.219-.219-.485-.328-.797-.328H9V.281c0-.078-.027-.144-.082-.199C8.863.027
                    8.797 0 8.718 0h-.937c-.078
                    0-.144.027-.199.082-.055.055-.082.121-.082.2V1.5h-3V.281c0-.078-.027-.144-.082-.199C4.363.027 4.297
                    0 4.218 0h-.937c-.078 0-.144.027-.199.082C3.027.137 3 .203 3 .282V1.5H1.875c-.313
                    0-.578.11-.797.328-.219.219-.328.484-.328.797v8.25c0
                    .313.11.578.328.797.219.219.484.328.797.328h8.25zm-.14-1.125h-7.97c-.03
                    0-.062-.016-.093-.047s-.047-.062-.047-.094V3.75h8.25v6.984c0
                    .032-.016.063-.047.094s-.062.047-.094.047zM4.218 6.75c.078 0
                    .144-.027.199-.082.055-.055.082-.121.082-.2v-.937c0-.078-.027-.144-.082-.199-.055-.055-.121-.082-.2-.082h-.937c-.078
                    0-.144.027-.199.082-.055.055-.082.121-.082.2v.937c0
                    .078.027.144.082.199.055.055.121.082.2.082h.937zm2.25 0c.078 0
                    .144-.027.199-.082.055-.055.082-.121.082-.2v-.937c0-.078-.027-.144-.082-.199-.055-.055-.121-.082-.2-.082h-.937c-.078
                    0-.144.027-.199.082-.055.055-.082.121-.082.2v.937c0
                    .078.027.144.082.199.055.055.121.082.2.082h.937zm2.25 0c.078 0
                    .144-.027.199-.082.055-.055.082-.121.082-.2v-.937c0-.078-.027-.144-.082-.199-.055-.055-.121-.082-.2-.082h-.937c-.078
                    0-.144.027-.199.082-.055.055-.082.121-.082.2v.937c0
                    .078.027.144.082.199.055.055.121.082.2.082h.937zM6.469 9c.078 0
                    .144-.027.199-.082.055-.055.082-.121.082-.2v-.937c0-.078-.027-.144-.082-.199-.055-.055-.121-.082-.2-.082h-.937c-.078
                    0-.144.027-.199.082-.055.055-.082.121-.082.2v.937c0
                    .078.027.144.082.199.055.055.121.082.2.082h.937zm-2.25 0c.078 0
                    .144-.027.199-.082.055-.055.082-.121.082-.2v-.937c0-.078-.027-.144-.082-.199-.055-.055-.121-.082-.2-.082h-.937c-.078
                    0-.144.027-.199.082-.055.055-.082.121-.082.2v.937c0
                    .078.027.144.082.199.055.055.121.082.2.082h.937zm4.5 0c.078 0
                    .144-.027.199-.082.055-.055.082-.121.082-.2v-.937c0-.078-.027-.144-.082-.199-.055-.055-.121-.082-.2-.082h-.937c-.078
                    0-.144.027-.199.082-.055.055-.082.121-.082.2v.937c0
                    .078.027.144.082.199.055.055.121.082.2.082h.937z'
                >
                </SVG>
            }
            clearIcon={null}
            locale={locale}
            maxDate={maxDate}
            minDate={minDate}
            value={value}
        />
    );
};

CustomDatePicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    dayPlaceHolder: PropTypes.string,
    monthPlaceholder: PropTypes.string,
    yearPlaceholder: PropTypes.string,
    defaultView: PropTypes.oneOf(['month', 'year', 'decade', 'century']),
    locale: PropTypes.string,
    maxDate: PropTypes.any,
    minDate: PropTypes.any,
    value: PropTypes.any,
    format: PropTypes.string,
    onCloseAction: PropTypes.func,
    className: PropTypes.string
};
CustomDatePicker.defaultProps = {
    dayPlaceHolder: 'dd',
    monthPlaceholder: 'mm',
    yearPlaceholder: 'yyyy',
    defaultView: 'month',
    locale: 'en-us',
    maxDate: new Date(),
    minDate: null,
    format: 'dd/MM/yyyy',
};
export default CustomDatePicker;
