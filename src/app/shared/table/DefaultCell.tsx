import React from "react";
import PropTypes from "prop-types";
import {DataTypeEnum} from "./CustomTableCore";
import {customFormatTzYMD} from "../DateUtils";

const DefaultCell = (props: any) => {
    const {column, data} = props

    return (
        <span>{column.dataType === DataTypeEnum.Date ? customFormatTzYMD(data[column.accessor], column.format) : data[column.accessor]}</span>
    )
}

DefaultCell.propTypes = {
    data: PropTypes.any,
    column: PropTypes.any
}

export default DefaultCell