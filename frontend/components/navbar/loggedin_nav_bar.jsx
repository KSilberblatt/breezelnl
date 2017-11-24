import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting_container';

const greetByName = (currentUser, logout) => (
  <div className="nav-greeting">
    <h2>Welcome, { currentUser.username }!</h2>
    <button className='logout-button' onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  greetByName(currentUser, logout)
);

const LoggedInNav = ({ currentUser, logout }) => (
  <div className='loggedin-nav-bar'>
    <div className='logo-container'>
      <img
        className='logo'
        src='https://i.imgur.com/ebI5yes.png'
        alt='logo'
        />
    </div>
    <Greeting
      logout={logout}
      currentUser={currentUser}
      />
  </div>
);



export default LoggedInNav;
