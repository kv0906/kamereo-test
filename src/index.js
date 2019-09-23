import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import store from './Store'
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* Assume that we know the id of specific store*/}
      <Route path="/stores/:id" component={App}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
