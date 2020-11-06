import React, {FormEvent, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './accounts.scss';
import CustomTable from "../../../shared/table/CustomTable.component";
import CustomCellCheck, {
    checkByGroup,
    checkById,
    unCheckByGroup,
    unCheckById
} from "../../../shared/table/CustomCellCheck";
import {loadDownLines} from "../../../../store/slice/account-drill-down.slice";
import {Form} from "react-bootstrap";

function Accounts() {
    const dispatch = useDispatch();
    const {downLines, loading} = useSelector((state: any) => state.drillDown);
    const {accounts, accountDetail} = useSelector((state: any) => state.account);
    const [filterForm, setFilterForm] = useState({type: 'id', subGroup: ''});
    const [updateForm, setUpdateForm] = useState({productAccess: [], creditAmount: 0, subGroup: ''});
    const [selectedSet, setSelectedSet] = useState(new Set());
    const downLinesRef = useRef(downLines);
    const [columns] = useState(initColumn());

    useLayoutEffect(() => {
        downLinesRef.current = downLines;
    }, [downLines]);

    function initColumn() {
        return [
            {
                id: 'account_id',
                header: 'Account ID',
                accessor: 'id',
                filter: <Form.Control type="text" size="sm"/>,
                minWidth: 80,
            },
            {
                id: 'level',
                header: 'Level',
                accessor: 'level',
                minWidth: 80,
            },
            {
                id: 'is_selected',
                headerCell: <CustomCellCheck type="checkbox" id={'select-all'} onChange={(e) => handleSelectAll(e)}/>,
                accessor: 'id',
                cell: <CustomCellCheck type="checkbox" onChange={(e, id) => handleSelectItem(e, id)}/>,
                minWidth: 30,
            },
            {
                id: 'credit',
                header: 'Credit Account',
                accessor: 'credit',
                filter: <Form.Control as="select" size="sm" custom>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>,
                minWidth: 80,
            },
            {
                id: 'credit_amount',
                header: 'Credit Amount',
                accessor: 'creditAmount',
                minWidth: 120,
            },
            {
                id: 'currency',
                header: 'Currency',
                accessor: 'currency',
                filter: <Form.Control as="select" size="sm" custom>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>,
                minWidth: 80,
            },
            {
                id: 'status',
                header: 'Status',
                accessor: 'status',
                minWidth: 80,
            },
            {
                id: 'deposits',
                groupHeader: 'Product Access',
                groupId: 'product_access',
                header: 'Deposits',
                accessor: 'deposits',
                filter: <Form.Control as="select" size="sm" custom>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>,
                minWidth: 80,
            },
            {
                id: 'withdrawals',
                groupHeader: 'Product Access',
                groupId: 'product_access',
                header: 'Withdrawals',
                accessor: 'withdrawals',
                filter: <Form.Control as="select" size="sm" custom>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>,
                minWidth: 80,
            },
            {
                id: 'casino',
                groupHeader: 'Product Access',
                groupId: 'product_access',
                header: 'Casino',
                accessor: 'casino',
                filter: <Form.Control as="select" size="sm" custom>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>,
                minWidth: 80,
            },
            {
                id: 'sports_book',
                header: 'Sports Book',
                groupHeader: 'Product Access',
                groupId: 'product_access',
                filter: <Form.Control as="select" size="sm" custom>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>,
                accessor: 'sportsBook',
                minWidth: 80,
            },
            {
                id: 'action',
                header: 'Action',
                accessor: 'action',
                minWidth: 80,
            },
        ]
    }

    const loadDefault = () => {
        setSelectedSet(new Set());
    }

    const selectAll = () => {
        checkByGroup('is_selected');
        downLinesRef.current.forEach((i: any) => {
            selectedSet.add(i.id);
        })
        setSelectedSet(new Set(selectedSet));
    }

    const unSelectAll = () => {
        selectedSet.clear();
        setSelectedSet(new Set());
        unCheckByGroup('is_selected');
    }

    const selectItem = (item: any) => {
        selectedSet.add(item);
        setSelectedSet(new Set(selectedSet));
    };

    const unSelectItem = (item: any) => {
        selectedSet.delete(item);
        setSelectedSet(new Set(selectedSet));
    }

    function isSelectedAll() {
        return selectedSet.size === downLinesRef.current.length;
    }

    const handleSelectAll = (e: any) => {
        !!e.target.checked ? selectAll() : unSelectAll();
    }

    const handleSelectItem = (e: any, id: any) => {
        !!e.target.checked ? selectItem(id) : unSelectItem(id);
        isSelectedAll() ? checkById('select-all') : unCheckById('select-all');
    }

    useEffect(() => {
        dispatch(loadDownLines(filterForm))
    }, [filterForm])

    useEffect(() => {
        loadDefault();
    }, [downLines])

    return (
        <div className='account-drill-down'>
            <CustomTable
                columns={columns}
                data={downLines}
                loading={loading}
                noRecordMessage={'No records found.'}
                className={'-striped'}
            />
        </div>
    );
}

export default Accounts;
