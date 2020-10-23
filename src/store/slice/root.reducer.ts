import {combineReducers} from "redux";
import AccountReducer from "../slice/account.slice";

export const RootReducer = combineReducers({
    account: AccountReducer,
});