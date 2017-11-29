import * as APIUtil from '../util/booking_api_util';


export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';

export const receiveSpots = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveSpot = booking => ({
  type: RECEIVE_BOOKING,
  booking
});


export const fetchSpots = filters => dispatch => (
  APIUtil.fetchSpots(filters).then(bookings => (
    dispatch(receiveSpots(bookings))
  ))
);

export const fetchSpot = id => dispatch => (
  APIUtil.fetchSpot(id).then(booking => (
    dispatch(receiveSpot(booking))
  ))
);

export const createSpot = booking => dispatch => (
  APIUtil.createSpot(booking).then(booking => (
    dispatch(receiveSpot(booking))
  ))
);
