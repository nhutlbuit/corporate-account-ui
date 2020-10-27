import React, {lazy, Suspense, useEffect} from 'react';
import { Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import {withRouter} from 'react-router';
import {useSelector} from 'react-redux';
import HeaderBar from './header-bar/header-bar';
import SearchPanel from './search-panel/search-panel';
import AccountListing from './account-listing/account-listing';
import NavBar from './nav-bar/nav-bar';
import './corporate-account-tool.scss';
import Spinner from '../shared/spinner/spinner';


const Profile = withRouter(lazy(() => import('./tabs/profile/profile')));
const Accounts = withRouter(lazy(() => import('./tabs/accounts/accounts')));
const Directors = withRouter(lazy(() => import('./tabs/directors/directors')));
const ChangeLog = withRouter(lazy(() => import('./tabs/change-log/change-log')));

function CorporateAccountTool() {

    const {toggleNavbar, isShowAccountListing, isShowContentPage, loading} = useSelector((state: any) => state.account);
    const match = useRouteMatch();
    const history = useHistory();

    useEffect(() => {
        if (isShowContentPage) {
            history.push(`${match.url}/profile`);
        }
    }, [isShowContentPage]);

    return (
        <>
            <HeaderBar/>
            <SearchPanel/>
            {loading && <Spinner/> }
            {isShowAccountListing && <AccountListing/>}
            {isShowContentPage &&
            <div className='columns'>
                {toggleNavbar && <NavBar/>}
                <div className='main-menu'>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
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
