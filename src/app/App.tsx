import React, {lazy, Suspense} from 'react';
import './app.scss';
import {Redirect, Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CONSTANT} from '../common/constants/CommonConst';

const CorporateAccountTool = withRouter(lazy(() => import('./corporate-account-tool/corporate-account-tool')));
const CorporateAccountReport = withRouter(lazy(() => import('./corporate-account-report/corporate-account-report')));

const App = () => {

    return (
        <>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Redirect from='/' exact to='/corporate-account-tool'/>
                        <Route path='/corporate-account-tool' component={CorporateAccountTool}/>
                        <Route path='/corporate-account-report' component={CorporateAccountReport}/>
                    </Switch>
                </Suspense>
            </main>
            <ToastContainer
                position='top-right'
                autoClose={CONSTANT.TOAST_TIMEOUT}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/>
        </>
    );
};

export default App;
