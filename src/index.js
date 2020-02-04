import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import StoreDetail from './components/StoreDetail/StoreDetail'
import store from './Store'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/stores/:id" component={StoreDetail}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
