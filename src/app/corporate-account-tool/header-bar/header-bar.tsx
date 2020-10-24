import React, {useState} from 'react';
import './header-bar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSyncAlt} from '@fortawesome/free-solid-svg-icons';
import {onToggleNavbar} from '../../../store/slice/account.slice';
import {useDispatch} from 'react-redux';

const HeaderBar = () => {

    const [isShowLeftMenu, setIsShowLeftMenu] = useState(true);
    const dispatch = useDispatch();

    const toggleLeftMenu = () => {
        dispatch(onToggleNavbar(!isShowLeftMenu));
        setIsShowLeftMenu(!isShowLeftMenu);
    };

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <header className='header-panel'>
            <span className='header' onClick={refreshPage}> <FontAwesomeIcon icon={faSyncAlt}/></span>
            <span className='header' onClick={toggleLeftMenu}> Corporate Account Tool</span>
        </header>
    );
};

export default HeaderBar;
