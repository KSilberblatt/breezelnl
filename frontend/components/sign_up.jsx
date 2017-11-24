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
      <div>
        <img
          className="splash"
          src="https://i.imgur.com/tO9vhiH.jpg?1"
          alt="Welcome to Breeze LnL!"></img>
        <br/>
        <GreetingContainer />
      </div>
      );
    }
}

export default Signup;
