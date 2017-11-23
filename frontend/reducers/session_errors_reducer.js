import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const sessionErrorsReducer = (state, action) => {

  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionErrorsReducer;
