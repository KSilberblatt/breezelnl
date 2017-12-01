import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting_container';

const greetByName = (currentUser, logout) => (
  <div className="nav-greeting">
    <div className="your-bookings">
      <h2>Welcome, { currentUser.username }!</h2>
      <Link className="bookings-link"
        to="/bookings">Your Bookings</Link>
    </div>
    <button className='logout-button' onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  greetByName(currentUser, logout)
);

const LoggedInNav = ({ currentUser, logout }) => (
  <div className='loggedin-nav-bar'>
    <div className='loggedin-logo-container'>
      <Link to="/spots/"><img
        className='logo'
        src='https://i.imgur.com/ebI5yes.png'
        alt='logo'
        /></Link>
        <Greeting
          logout={logout}
          currentUser={currentUser}
          />
    </div>

  </div>
);



export default LoggedInNav;
