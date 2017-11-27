import React from 'react';
import {connect} from 'react-redux';
import NavBar from './loggedin_nav_bar';
import { logout } from '../../actions/session_actions';

// I dont actually need state or dispatch for this NavBar, but trying
// to stay on a patter while I'm familiarizing myself with it.

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
