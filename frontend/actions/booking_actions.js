import * as APIUtil from '../util/booking_api_util';


export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_CURRENT_BOOKING = 'RECEIVE_CURRENT_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
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
export const receiveCurrentBooking = currentBooking => ({
  type: RECEIVE_CURRENT_BOOKING,
  currentBooking
});

export const receiveErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
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

export const createBooking = formBooking => dispatch => (
  APIUtil.createBooking(formBooking).then((booking) => (
    dispatch(receiveCurrentBooking(booking))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  )).then(() => dispatch(clearErrors()))
);
