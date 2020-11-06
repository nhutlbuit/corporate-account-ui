import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";

const CustomCellCheck = (props: any) => {
    const {type, data, id, group, onChange} = props
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const setFromEvent = () => setChecked(true);
        window.addEventListener(`check-by-${id}`, setFromEvent);
        window.addEventListener(`check-by-${group}`, setFromEvent);
        return () => {
            window.removeEventListener(`check-by-${group}`, setFromEvent);
            window.removeEventListener(`check-by-${id}`, setFromEvent);
        };
    }, []);

    useEffect(() => {
        const setFromEvent = () => setChecked(false);
        window.addEventListener(`uncheck-by-${id}`, setFromEvent);
        window.addEventListener(`uncheck-by-${group}`, setFromEvent);
        return () => {
            window.removeEventListener(`uncheck-by-${id}`, setFromEvent);
            window.removeEventListener(`uncheck-by-${group}`, setFromEvent);
        };
    }, []);

    const handleChange = (e: any, id: any, data?: any) => {
        let _checked = !checked;
        onChange(e, id, data);
        setChecked(_checked);
    }

    return (
        <Form.Check type={type} checked={checked} onChange={(e) => handleChange(e, id, data)}/>
    )
}

CustomCellCheck.propTypes = {
    onChange: PropTypes.func,
    id: PropTypes.any,
    group: PropTypes.any,
    data: PropTypes.any,
    column: PropTypes.any,
    type: PropTypes.string
}

export default CustomCellCheck

export const checkById = (id: string) => {
    window.dispatchEvent(new Event(`check-by-${id}`));
}

export const unCheckById = (id: string) => {
    window.dispatchEvent(new Event(`uncheck-by-${id}`));
}

export const checkByGroup = (group: string) => {
    window.dispatchEvent(new Event(`check-by-${group}`));
}

export const unCheckByGroup = (group: string) => {
    window.dispatchEvent(new Event(`uncheck-by-${group}`));
}