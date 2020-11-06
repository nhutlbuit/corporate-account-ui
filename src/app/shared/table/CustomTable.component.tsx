import React, {useEffect, useState} from "react";
import './CustomTable.component.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCaretDown, faCaretRight, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {Column, Group, groupBy, groupColumn, hasSort, SortOrder, updateSort} from "./CustomTableCore";
import PropTypes from "prop-types";
import CustomGroup from "./CustomGroup";
import {Spinner} from "react-bootstrap";

const CustomTable = (props: any) => {
    const {filter, onSortChange, noRecordMessage} = props
    const [columns, setColumns] = useState(new Array<Column>());
    const [groups, setGroups] = useState(new Array<Group>());
    const sort = ['', '-sort-asc', '-sort-desc']
    library.add(faCaretUp, faCaretDown, faCaretRight)

    useEffect(() => {
        setColumns(props.columns)
    }, [])

    useEffect(() => {
        let groups: Array<any> = groupBy(props.data, props.groupBy, props.expanded || false)
        setGroups(groups)
    }, [props.data])

    const onHeaderClick = (column: Column) => {
        let cols = updateSort(column, columns)
        setColumns(cols)
        filter.sortByCols = column.id
        filter.orderBy = SortOrder[column.sort || 0]
        onSortChange({...filter})
    }

    const isDataEmpty = () => {
        return !props.data || props.data.length === 0
    }

    const renderFilters = () => {
        return (
            <div className='ct-tr-group'>
                <div className={'ct-tr ct-filter'}>
                    {
                       columns.map((c: Column, index) => (
                           <div className='ct-td' key={index} style={{flex: c.minWidth + ' 0 auto', width: c.minWidth}}>
                               {!!c.filter && React.cloneElement(c.filter, {column: c})}
                           </div>
                       ))
                    }
                </div>
            </div>
        )
    }

    const renderHeader = () => {
        let headers = groupColumn(columns, 'groupId');
        return (
            <div className='ct-thead -header'>
                <div className={'ct-tr'}>
                    {
                        headers.map((h: any) => (
                            <div
                                key={h.groupId}
                                className={!!h.header ? 'ct-th ct-th-group' : 'ct-th'}
                                style={{flex: h.minWidth + ' 0 auto', width: h.minWidth}}
                            >
                                {
                                    !!h.header &&
                                    <div className='ct-th-header' style={{gridArea: 'header'}}>
                                        <span><b>{h.header}</b></span>
                                    </div>
                                }
                                {
                                    h.cols.map((c: Column, index: number) => (
                                        <div
                                            className={c.className || '' + ' ct-th ' + sort[c.sort || 0] + (hasSort(c) ? ' -cursor-pointer' : '')}
                                            key={index}
                                            // style={{flex: c.minWidth + ' 0 auto', width: c.minWidth}}
                                            onClick={() => hasSort(c) && onHeaderClick(c)}
                                        >
                                            {c.headerCell || <span className="fa-stack pull-left"><b>{c.header}</b></span> }
                                            {
                                                hasSort(c) &&
                                                <span className="fa-stack pull-right">
                                                    {c.sort !== SortOrder.DESC && <FontAwesomeIcon icon="caret-up"/>}
                                                    {c.sort !== SortOrder.ASC && <FontAwesomeIcon icon="caret-down"/>}
                                                </span>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    const renderSpinner = () => {
        return (
            <>
            <div className="spinner-backdrop"/>
            <div className="d-flex justify-content-center spinner-wrapper">
                <Spinner animation="border" role="status">
                </Spinner>
            </div>
            </>
        )
    }

    const renderBody = () => {
        return (
            <div className='ct-tbody'>
                {renderFilters()}
                <div className={isDataEmpty() ? 'pt-1 pb-1 text-center' : 'd-none'}>
                    <b>{noRecordMessage}</b>
                </div>
                {
                    groups.map((g: Group, index) => (
                        <CustomGroup
                            key={g.groupId}
                            group={g}
                            columns={columns}
                            className={index % 2 != 0 ? '-even' : '-odd'}/>
                    ))
                }
            </div>
        )
    }

    return (
        <div className={'custom-table ' + props.className}>
            <div className="ct-table">
                {props.loading && renderSpinner()}
                {renderHeader()}
                {renderBody()}
            </div>
        </div>
    )
}

CustomTable.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
    columns: PropTypes.array,
    groupBy: PropTypes.string,
    filter: PropTypes.any,
    noRecordMessage: PropTypes.string,
    onSortChange: PropTypes.func,
    expanded: PropTypes.bool,
    loading: PropTypes.bool
}

export default CustomTable

