import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from "./app/App";
import store from './store/store'

const rootNode = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename='account-ui'>
      <App />
    </BrowserRouter>
  </Provider>,

    rootNode
);

