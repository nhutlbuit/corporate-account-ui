import React, {useState} from 'react';
import './header-bar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSyncAlt} from '@fortawesome/free-solid-svg-icons';
import {onToggleNavbar} from '../../../store/slice/account.report.slice';
import {useDispatch} from 'react-redux';

const HeaderBar = () => {

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <header className='header-panel'>
            <span className='header' onClick={refreshPage}> <FontAwesomeIcon icon={faSyncAlt}/></span>
            <span className='header'> Corporate Account Report</span>
        </header>
    );
};

export default HeaderBar;
