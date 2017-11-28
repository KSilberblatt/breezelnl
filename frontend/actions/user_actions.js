import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});



export const fetchUsers = filters => dispatch => (
  APIUtil.fetchUsers(filters).then(users => (
    dispatch(receiveUsers(users))
  ))
);
