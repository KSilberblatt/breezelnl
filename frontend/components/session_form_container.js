import { login, signup, logout } from '../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';


const mapStateToProps = (state, errors = state.errorsReducer.session) => {
  if (!errors) {
    errors = [];
  }
  return {
    loggedIn: Boolean(state.sessionReducer.currentUser),
    errors: errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
