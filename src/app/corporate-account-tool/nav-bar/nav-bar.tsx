import React from 'react';
import {NavLink, useRouteMatch} from 'react-router-dom';
import  "./nav-bar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopy, faBriefcase, faUser, faUserCircle} from "@fortawesome/free-solid-svg-icons";

const NavBar = (props: any) => {
    const match = useRouteMatch();

    return(
        <nav className="column is-2 menu left-menu">
             <ul className="menu-list">
                <NavLink to={`${match.url}/profile`} activeClassName="active-link">
                    <FontAwesomeIcon icon={faBriefcase}/> Profile
                </NavLink>
                <NavLink to={`${match.url}/directors`} activeClassName="active-link">
                    <FontAwesomeIcon icon={faUser}/> Directors
                </NavLink>
                <NavLink to={`${match.url}/accounts`} activeClassName="active-link">
                    <FontAwesomeIcon icon={faUserCircle}/> Accounts
                </NavLink>
                <NavLink to={`${match.url}/change-log`} activeClassName="active-link">
                    <FontAwesomeIcon icon={faCopy}/> Change Log
                </NavLink>
            </ul>
            {props.children}
        </nav>
    );
}


export default NavBar;