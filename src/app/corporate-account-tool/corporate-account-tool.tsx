import React, { Suspense, useEffect } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderBar from './header-bar/header-bar';
import SearchPanel from './search-panel/search-panel';
import AccountListing from './account-listing/account-listing';
import NavBar from './nav-bar/nav-bar';
import './corporate-account-tool.scss';
import Spinner from '../shared/spinner/spinner';
import { lazyWithPreload } from '../shared/lazy-with-preload';


const Profile = lazyWithPreload(() => import('./tabs/profile/profile'));
Profile.preload();

const Accounts = lazyWithPreload(() => import('./tabs/accounts/accounts'));
Accounts.preload();

const Directors = lazyWithPreload(() => import('./tabs/directors/directors'));
Directors.preload();

const ChangeLog = lazyWithPreload(() => import('./tabs/change-log/change-log'));
ChangeLog.preload();


function CorporateAccountTool() {

    const { toggleNavbar, isShowAccountListing, isShowContentPage, isLoadingAccountListing } = useSelector((state: any) => state.account);
    const match = useRouteMatch();
    const history = useHistory();

    useEffect(() => {
        if (isShowContentPage) {
            history.push(`${match.url}/profile`);
        }
    }, [isShowContentPage]);

    return (
        <>
            <HeaderBar />
            <SearchPanel />
            {isLoadingAccountListing && <Spinner />}
            {isShowAccountListing && <AccountListing />}
            {isShowContentPage &&
                <div className='columns'>
                    {toggleNavbar && <NavBar />}
                    <div className='main-menu'>
                        <Suspense fallback={<Spinner />}>
                            <Switch>
                                <Route path={`${match.url}/profile`} component={Profile} />
                                <Route path={`${match.url}/accounts`} component={Accounts} />
                                <Route path={`${match.url}/directors`} component={Directors} />
                                <Route path={`${match.url}/change-log`} component={ChangeLog} />
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            }
        </>
    );
}

export default CorporateAccountTool;
