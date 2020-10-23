
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import {RootReducer} from "./slice/root.reducer";
import {RootSaga} from "./middleware/root.saga";

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: RootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(RootSaga);

export default Store;

