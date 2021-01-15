import React, {lazy, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './accounts.scss';
import CustomTable from '../../../shared/table/CustomTable.component';
import CustomCellCheck, {
    checkByGroup,
    checkById,
    unCheckByGroup,
    unCheckById
} from '../../../shared/table/CustomCellCheck';
import {loadDownLines} from '../../../../store/slice/account-drill-down.slice';
import {Button, Form, FormCheck} from 'react-bootstrap';
import { withRouter } from 'react-router';
import { saveAccount } from '../../../../store/slice/account.slice';
import Select from 'react-select';

const AddAccountLv1 = withRouter(lazy(() => import('./add-account-lv1/add-account-lv1')));
const AddEditSubGroup = withRouter(lazy(() => import('./add-edit-sub-group/add-edit-sub-group')));
const SubGroupDetail = withRouter(lazy(() => import('./sub-group-detail/sub-group-detail')));

function Accounts() {
    const dispatch = useDispatch();
    const {downLines, loading} = useSelector((state: any) => state.drillDown);
    const {accountDetail, isUpdateAccount} = useSelector((state: any) => state.account);
    const [selectedSet, setSelectedSet] = useState<any>(new Set());
    const downLinesRef = useRef(downLines);
    const [columns] = useState(initColumn());
    const [isAdd, setAdd] = useState(false);
    const [isAddNewSubGroup, setAddNewSubGroup] = useState(false);
    const [creditAmount, setCreditAmount] = useState('');
    const { groupsAccountCount } = useSelector((state: any) => state.group);
    const [groups, setGroup] = useState([]);
    const [selectedSubGroup, setSelectedSubGroup] = useState<any>(groups[0]);
    const [productAccess, setProductAccess] = useState({casino: 'Yes', sportsbook: 'Yes'});

    useLayoutEffect(() => {
        downLinesRef.current = downLines;
    }, [downLines]);

    function initColumn() {
        return [
            {
                id: 'account_id',
                header: 'Account ID',
                accessor: 'id',
                filter: <Form.Control type='text' size='sm'/>,
                minWidth: 80,
            },
            {
                id: 'level',
                header: 'Level',
                accessor: 'level',
                minWidth: 80,
            },
            {
                id: 'subGroup',
                header: 'Sub Group',
                accessor: 'subGroup',
                filter: <Form.Control as='select' size='sm' custom>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>,
                minWidth: 80,
            },
            {
                id: 'is_selected',
                headerCell: <CustomCellCheck type='checkbox' id={'select-all'} onChange={(e) => handleSelectAll(e)}/>,
                accessor: 'id',
                cell: <CustomCellCheck type='checkbox' onChange={(e, id) => handleSelectItem(e, id)}/>,
                minWidth: 30,
            },
            {
                id: 'credit',
                header: 'Credit Account',
                accessor: 'credit',
                filter: <Form.Control as='select' size='sm' custom>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>,
                minWidth: 80,
            },
            {
                id: 'credit_amount',
                header: 'Credit Amount',
                accessor: 'creditLimit',
                minWidth: 120,
            },
            {
                id: 'currency',
                header: 'Currency',
                accessor: 'currency',
                filter: <Form.Control as='select' size='sm' custom>
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
                filter: <Form.Control as='select' size='sm' custom>
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
                filter: <Form.Control as='select' size='sm' custom>
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
                filter: <Form.Control as='select' size='sm' custom>
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
                filter: <Form.Control as='select' size='sm' custom>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>,
                accessor: 'sportsbook',
                minWidth: 80,
            },
            {
                id: 'action',
                header: 'Action',
                accessor: 'action',
                minWidth: 80,
            },
        ];
    }

    const loadDefault = () => {
        setSelectedSet(new Set());
    };

    const selectAll = () => {
        checkByGroup('is_selected');
        downLinesRef.current.forEach((i: any) => {
            selectedSet.add(i.id);
        });
        setSelectedSet(new Set(selectedSet));
    };

    const unSelectAll = () => {
        selectedSet.clear();
        setSelectedSet(new Set());
        unCheckByGroup('is_selected');
    };

    const selectItem = (item: any) => {
        selectedSet.add(item);
        setSelectedSet(new Set(selectedSet));
    };

    const unSelectItem = (item: any) => {
        selectedSet.delete(item);
        setSelectedSet(new Set(selectedSet));
    };

    function isSelectedAll() {
        return selectedSet.size === downLinesRef.current.length;
    }

    const handleSelectAll = (e: any) => {
        !!e.target.checked ? selectAll() : unSelectAll();
    };

    const handleSelectItem = (e: any, id: any) => {
        !!e.target.checked ? selectItem(id) : unSelectItem(id);
        isSelectedAll() ? checkById('select-all') : unCheckById('select-all');
    };

    useEffect(() => {
        dispatch(loadDownLines(''));
    }, [isUpdateAccount]);

    useEffect(() => {
        loadDefault();
    }, [downLines]);

    const addAccountLv1 = () => {
        setAdd(true);
    };

    const addNewSubGroup = () => {
        setAddNewSubGroup(true);
    };

    const onChangeProductAccess = (e: React.FormEvent<HTMLInputElement>): void => {
        setProductAccess({...productAccess, [(e.target as any).name]: (e.target as any).checked ? 'Yes' : 'No'});
    };

    const updateProductAccess = () => {
        if (selectedSet.size === 0) {
            return;
        }

       const rowSelected = downLines.filter((e: any) => selectedSet.has(e.id)).map((e: any) => {
           const row = {...e};
           row.casino = productAccess.casino;
           row.sportsbook = productAccess.sportsbook;
           return row;
       });

       dispatch(saveAccount(rowSelected));
       loadDefault();
    };

    const onUpdateCreditLimit = () => {
        if (selectedSet.size === 0) {
            return;
        }

       const rowSelected = downLines.filter((e: any) => selectedSet.has(e.id)).map((e: any) => {
           const row = {...e};
           row.creditLimit = creditAmount;
           return row;
       });

       dispatch(saveAccount(rowSelected));
       loadDefault();
    };

    const onUpdateSubGroup = () => {
        if (selectedSet.size === 0) {
            return;
        }

       const rowSelected = downLines.filter((e: any) => selectedSet.has(e.id)).map((e: any) => {
           const row = {...e};
           row.subGroup = selectedSubGroup.value;
           return row;
       });

       dispatch(saveAccount(rowSelected));
       loadDefault();
    };

    const onChangeCreditAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCreditAmount(e.target.value);
    };

    useEffect(() => {
        const groupsTemp: any = [];
        groupsAccountCount.map((g: any) => {
            groupsTemp.push({value: g.groupName, label: g.groupName});
        });
        setGroup(groupsTemp);
    }, [groupsAccountCount]);

    const onChangeSubGroup = (e: any) => {
        setSelectedSubGroup(groups.find((el: any) => e.value === el.value));
    };

    return (
        <>
            <div className='filter'>
                <div className='credit'>
                    <span className='field-text fieldset'>Credit Amount</span>
                    <input className='fieldset filter-input' type='text' name='creditAmount' onChange={onChangeCreditAmount}/>
                    <Button className='fieldset' variant='success' onClick={onUpdateCreditLimit} disabled={selectedSet.size === 0 || creditAmount === ''}>UPDATE CREDIT LIMIT</Button>

                    <span className='field-text fieldset'>Product Access</span>
                    <FormCheck name='casino' type='checkbox' defaultChecked={productAccess.casino === 'Yes'} onClick={onChangeProductAccess} className='checkbox'/>
                    <span className='fieldset'>Casio</span>
                    <FormCheck name='sportsbook' type='checkbox' defaultChecked={productAccess.sportsbook === 'Yes'} onClick={onChangeProductAccess} className='checkbox'/>
                    <span className='fieldset'>Sportsbook</span>
                    <Button onClick={updateProductAccess} variant='success'>UPDATE PRODUCT ACCESS</Button>

                    <Button className='add-profile' onClick={addAccountLv1}>ADD NEW LEVEL 1 ACCOUNT(S)</Button>
                    { isAdd &&
                        <AddAccountLv1
                            accountDetail={accountDetail}
                            onClosePopup={() => setAdd(false)}
                        />
                    }
                </div>
                <div className='section-group'>
                    <span className='sub-group-name'>Sub Group</span>
                    <Select options={groups} onChange={onChangeSubGroup} className='fieldset select' value={selectedSubGroup}/>
                    <Button className='fieldset' variant='success' disabled={selectedSet.size === 0} onClick={onUpdateSubGroup}>UPDATE SUB GROUP</Button>
                    <Button className='add-new-sub-group' onClick={addNewSubGroup}>ADD NEW SUB GROUP</Button>
                    { isAddNewSubGroup && <AddEditSubGroup onClosePopup={() => setAddNewSubGroup(false)} currentGroupName={''}/>}
                </div>
            </div>

            <div className='account-drill-down'>
                <CustomTable
                    columns={columns}
                    data={downLines}
                    loading={loading}
                    noRecordMessage={'No records found.'}
                    className={'-striped'}
                />
            </div>

            <SubGroupDetail />
        </>
    );
}

export default Accounts;
