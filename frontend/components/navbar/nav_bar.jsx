import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInNav from './loggedin_nav_bar_container';
import LoggedOutNav from './intro_nav_bar_container';

const notLoggedIn = () => (
  <div>
    <LoggedOutNav />
  </div>
);

const loggedIn = (currentUser, logout) => (
  <div>
    <LoggedInNav />
  </div>
);

const NavBar = ({ currentUser, logout }) => (
  currentUser ? loggedIn(currentUser, logout) : notLoggedIn()
);

export default NavBar;
