import * as APIUtil from '../util/booking_api_util';


export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () =>({
  type: CLEAR_ERRORS
});

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});


export const fetchBookings = filters => dispatch => (
  APIUtil.fetchBookings(filters).then(bookings => (
    dispatch(receiveBookings(bookings))
  ))
);

export const fetchBooking = id => dispatch => (
  APIUtil.fetchBooking(id).then(booking => (
    dispatch(receiveBooking(booking))
  ))
);

export const createBooking = booking => dispatch => (
  APIUtil.createBooking(booking).then(booking => (
    dispatch(receiveBooking(booking))
  ))
);
