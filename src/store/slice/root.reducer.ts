import {combineReducers} from 'redux';
import AccountReducer from './account.slice';
import DirectorReducer from './director.slice';
import AccountDrillDown from './account-drill-down.slice';

export const RootReducer = combineReducers({
    account: AccountReducer,
    director: DirectorReducer,
    drillDown: AccountDrillDown,
});
