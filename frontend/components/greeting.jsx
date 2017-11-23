import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign up!</Link>
  </div>
);

const greetByName = (currentUser, logout) => (
  <div>
    <h1> Hello: { currentUser.username }</h1>
    <button onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? greetByName(currentUser, logout) : sessionLinks()
);

export default Greeting;
