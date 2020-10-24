import React, {lazy, Suspense} from 'react';
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
import {withRouter} from 'react-router';
import 'bulma/bulma.sass';
import {useSelector} from 'react-redux';
import HeaderBar from './header-bar/header-bar';
import SearchPanel from './search-panel/search-panel';
import AccountListing from './account-listing/account-listing';
import NavBar from './nav-bar/nav-bar';
import './corporate-account-tool.scss';

const Profile = withRouter(lazy(() => import('./tabs/profile/profile')));
const Accounts = withRouter(lazy(() => import('./tabs/accounts/accounts')));
const Directors = withRouter(lazy(() => import('./tabs/directors/directors')));
const ChangeLog = withRouter(lazy(() => import('./tabs/change-log/change-log')));

function CorporateAccountTool() {

    const {toggleNavbar, isShowAccountListing, isShowContentPage} = useSelector((state: any) => state.account);
    const match = useRouteMatch();

    return (
        <>
            <HeaderBar/>
            <SearchPanel/>
            {isShowAccountListing && <AccountListing/>}
            {isShowContentPage &&
            <div className='section columns'>
                {toggleNavbar && <NavBar/>}
                <div className='column main-menu'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Redirect from='/' exact to={`${match.url}/profile`}/>
                            <Route path={`${match.url}/profile`} component={Profile}/>
                            <Route path={`${match.url}/accounts`} component={Accounts}/>
                            <Route path={`${match.url}/directors`} component={Directors}/>
                            <Route path={`${match.url}/change-log`} component={ChangeLog}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
            }
        </>
    );
}

export default CorporateAccountTool;
