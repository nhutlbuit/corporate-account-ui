import {combineReducers} from 'redux';
import AccountReducer from './account.slice';
import DirectorReducer from './director.slice';

export const RootReducer = combineReducers({
    account: AccountReducer,
    director: DirectorReducer
});
