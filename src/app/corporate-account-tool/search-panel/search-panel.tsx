import './search-panel.scss';
import React, {lazy, useState} from 'react';
import {Button} from 'react-bootstrap';
import Select from 'react-select';
import {useDispatch} from 'react-redux';
import {loadAccounts} from '../../../store/slice/account.slice';

const AddEditProfile = lazy(() => import('../tabs/profile/add-edit-profile/add-edit-profile'));

function SearchPanel() {

    const types = [
        { value: 'id', label: 'Corporate Account ID' },
        { value: 'name', label: 'Corporate Account Name' },
        { value: 'partnerId', label: 'Partner Label ID' }
    ];
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({type: 'id', value: ''});
    const [selectedType, setSelectedType] = useState<any>(types[0]);
    const [isAdd, setAdd] = useState(false);

    const onChangeSearchType = (e: any) => {
        setFilter({...filter, 'type': e.value, 'value': ''});
        setSelectedType(types.find((el: any) => e.value === el.value));
    };

    const search = () => {
        dispatch(loadAccounts(filter));
    };

    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({...filter, 'value': e.target.value});
    };

    const onKeyPressEnter = (e: any) => e.key === 'Enter' && search();

    return (
        <>
            <div className='search-panel'>
                <Select options={types} onChange={onChangeSearchType} className='select fieldset' value={selectedType}/>
                <input className='fieldset filter-input' type='text' name='updateBy' value={filter?.value} onChange={onChangeSearchValue} onKeyPress={onKeyPressEnter}/>
                <Button className='fieldset' onClick={search}>SEARCH</Button>
                <Button className='add-profile' onClick={() => setAdd(true)}>ADD CORPORATE PROFILE</Button>
            </div>
            {isAdd && <AddEditProfile onClosePopup={() => setAdd(false)}/>}
        </>
    );
}

export default SearchPanel;
