import React from 'react';
import GreetingContainer from './greeting_container';
import IntroNavContainer from './navbar/intro_nav_bar_container';
import SessionFormContainer from './session_form_container';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="signup">
        <img
          className="splash"
          src="https://i.imgur.com/tO9vhiH.jpg?1"
          alt="Welcome to Breeze LnL!"></img>
        <br/>
        <div className="slogan">
          <h1>Welcome to BreezeLnL!</h1>
          <br/>
          <h2>Finding you a Lodge</h2>
          <h2>&#39;n Lunch will be a Breeze</h2>
        </div>
        <GreetingContainer />
      </div>
      );
    }
}

export default Signup;
