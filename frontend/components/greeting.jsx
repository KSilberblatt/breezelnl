import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const sessionLinks = () => (
  <div>
    <div className="greeting-container">
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
    </div>

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
