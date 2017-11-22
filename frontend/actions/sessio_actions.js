import * as SessionAPIUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (user1) => (dispatch) => (
  SessionAPIUtil.signup(user1).then(
    (user2) => (dispatch(receiveCurrentUser(user2))))
);

export const login = (user1) => (dispatch) => (
  SessionAPIUtil.login(user1).then(
    (user2) => (dispatch(receiveCurrentUser(user2))))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
