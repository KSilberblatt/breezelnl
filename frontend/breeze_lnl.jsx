import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {


  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = configureStore(preloadedState);

  const root = document.getElementById('root');

  // Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.login =
  // Testing
  // ReactDOM.render(<h1>Welcome to BreezeLnL</h1>, root);
  ReactDOM.render(<Root store={ store }/>, root);

});
