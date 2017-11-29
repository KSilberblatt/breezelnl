import merge from 'lodash/merge';

import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING
} from '../actions/booking_actions';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      const newBooking = {[action.booking.id]: action.booking};
      return merge({}, state, newBooking);
    default:
      return state;
  }
};

export default bookingsReducer;
