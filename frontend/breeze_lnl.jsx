import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();

  // Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Testing

  const root = document.getElementById('root');
  // ReactDOM.render(<h1>Welcome to BreezeLnL</h1>, root);
  ReactDOM.render(<Root store={ store }/>, root);

});
