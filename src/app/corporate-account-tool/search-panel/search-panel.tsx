import './search-panel.scss';
import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import Select from 'react-select';
import {useDispatch} from 'react-redux';
import {loadAccounts} from '../../../store/slice/account.slice';

function SearchPanel() {

    const options = [
        { value: 'chocolate', label: 'Corporate Account ID' },
        { value: 'strawberry', label: 'Corporate Account Name' },
        { value: 'vanilla', label: 'Partner Label ID' }
    ];
    const dispatch = useDispatch();
    const [filterName, setFilterName] = useState('');

    const onChangeClassCode = () => {
        setFilterName('');
    };

    const search = () => {
        dispatch(loadAccounts(filterName));
    };

    const onChangeAccountId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterName(e.target.value);
    };

    const onKeyPressEnter = (e: any) => e.key === 'Enter' && search();

    return (
        <div className='search-panel'>
            <Select options={options} onChange={onChangeClassCode} className='select fieldset' value={options[0]}/>
            <input className='fieldset filter-input' type='text' name='updateBy' value={filterName} onChange={onChangeAccountId} onKeyPress={onKeyPressEnter}/>
            <Button className='fieldset' onClick={search}>SEARCH</Button>
            <Button className='add-profile' onClick={search}>ADD CORPORATE PROFILE</Button>
        </div>
    );
}

export default SearchPanel;
