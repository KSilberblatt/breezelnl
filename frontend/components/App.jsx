import React from 'react';
import GreetingContainer from './greeting_container';
import NavBar from './navbar/nav_bar_container';
import Footer from './footer/footer_container';
import SessionFormContainer from './session_form_container';
import SignupContainer from './sign_up_container';
import SpotShowContainer from './spot_show/spot_show_container';
import SpotIndexContainer from './spot_index/spot_index_container';
import BookingFormContainer from './booking/booking_form_container';
import {Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <div className="content">
      <Switch>
        <ProtectedRoute exact path="/spots/:spotId"
          component={SpotShowContainer} />
        <ProtectedRoute exact path="/spots"
          component={SpotIndexContainer} />
      </Switch>
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={SignupContainer} />
        <ProtectedRoute exact path="/" component={()=><div />} />

    </div>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;

// <Route path="/" component={NavBarContainer}/>
// <Route exact path="/" component={Home} />
