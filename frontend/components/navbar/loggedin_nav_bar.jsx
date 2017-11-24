import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting_container';

class IntroNavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className='intro-nav-bar'>
        <div className='logo-container'>
          <img
            className='logo'
            src='https://i.imgur.com/ebI5yes.png'
            alt='logo'
            />
          
        </div>
      </div>
      );
    }
}

export default IntroNavBar;
