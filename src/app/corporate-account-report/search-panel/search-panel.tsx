import './search-panel.scss';
import React, {lazy, useState} from 'react';
import {Button} from 'react-bootstrap';
import Select from 'react-select';
import {useDispatch} from 'react-redux';
import {loadAccountReport} from '../../../store/slice/account.report.slice';
import DatePicker from 'react-datepicker';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

function SearchPanel() {

    const types = [
        { value: 'name', label: 'Corporate Account Name' },
        { value: 'partnerId', label: 'Partner Label ID' }
    ];
    const optionLicense = [
      { value: 'license_1', label: 'license 1' },
      { value: 'license_2', label: 'license 2' }
    ];
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({type: 'id', value: ''});
    const [selectedType, setSelectedType] = useState<any>(types[0]);
    const [selectedLicense, setSelectedLicense] = useState<any>(optionLicense[0]);
    const [isAdd, setAdd] = useState(false);

    const onChangeSearchType = (e: any) => {
        setFilter({...filter, 'type': e.value, 'value': ''});
        setSelectedType(types.find((el: any) => e.value === el.value));
    };
    const onChangeSearchLicense = (e: any) => {
      setFilter({...filter, 'license': e.value, 'value': ''});
      setSelectedLicense(optionLicense.find((el: any) => e.value === el.value));
    };
    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter({...filter, 'value': e.target.value});
    };

    const search = () => {
        dispatch(loadAccountReport(filter));
    };

    

    const onKeyPressEnter = (e: any) => e.key === 'Enter' && search();

    const renderDatePicker = () => {
      const [startDate, setStartDate] = useState(new Date());
      return (
        <div className="section-date-picker">
          <label className='fieldset mt-2'>Date as of: </label>
          <label className='calendar-container'>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              showTimeSelect
              timeFormat="p"
              timeIntervals={15}
              dateFormat="Pp"
              className="fieldset filter-input"
            />
            <div className='calendar-alt'><FontAwesomeIcon icon={faCalendarAlt} size='lg'/></div>
          </label>
        </div>
      );
    }

    return (
        <>
            <div className='search-panel'>
                <label className='fieldset mt-2'>Filter on: </label>
                <Select options={optionLicense} onChange={onChangeSearchLicense} className='select fieldset' value={selectedLicense}/>
                <Select options={types} onChange={onChangeSearchType} className='select fieldset' value={selectedType}/>
                <input className='fieldset filter-input' type='text' name='updateBy' value={filter?.value} onChange={onChangeSearchValue} onKeyPress={onKeyPressEnter}/>
                <Button className='fieldset btn btn-success' onClick={search}>SUBMIT</Button>
                {renderDatePicker()}
            </div>
        </>
    );
}

export default SearchPanel;
