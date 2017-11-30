import { RECEIVE_BOOKING_ERRORS,
   RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/booking_actions';


export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    // case RECEIVE_CURRENT_USER:
    //   return null;
    default:
      return state;
  }
};
