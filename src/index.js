import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import "./views/App.css"

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './store/reducers/RootReducer';

const reduxState = createStore(RootReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);