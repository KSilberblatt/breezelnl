import React from 'react';
import GreetingContainer from './greeting_container';
import IntroNavContainer from './navbar/intro_nav_bar_container';
import SessionFormContainer from './session_form_container';
import SignupContainer from './sign_up_container';
import {Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <IntroNavContainer/>
    </header>

    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={SignupContainer} />
    <ProtectedRoute exact path="/" component={()=><div />} />
  </div>
);

export default App;

// <Route path="/" component={NavBarContainer}/>
// <Route exact path="/" component={Home} />
