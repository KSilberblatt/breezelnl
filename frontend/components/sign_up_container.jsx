import React from 'react';
import {connect} from 'react-redux';
import Signup from './sign_up';
import { logout } from '../actions/session_actions';

// I dont actually need state or dispatch for this NavBar, but trying
// to stay on a patter while I'm familiarizing myself with it.

const mapStateToProps = (state) => ({
  currentUser: state.sessionReducer.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
