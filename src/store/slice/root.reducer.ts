import {combineReducers} from 'redux';
import AccountReducer from './account.slice';
import DirectorReducer from './director.slice';
import AccountDrillDown from './account-drill-down.slice';
import AccountReportReducer from './account.report.slice';
import GroupReducer from './group.slice';
import { NumberFormatUtils } from "../../common/constants/NumberFormatUtils";

NumberFormatUtils.utilsNumeric();
export const RootReducer = combineReducers({
    account: AccountReducer,
    director: DirectorReducer,
    drillDown: AccountDrillDown,
    accountReport: AccountReportReducer,
    group: GroupReducer
});
