import * as APIUtil from '../util/review_api_util';


export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveSpots = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveSpot = review => ({
  type: RECEIVE_REVIEW,
  review
});


export const fetchSpots = filters => dispatch => (
  APIUtil.fetchSpots(filters).then(reviews => (
    dispatch(receiveSpots(reviews))
  ))
);

export const fetchSpot = id => dispatch => (
  APIUtil.fetchSpot(id).then(review => (
    dispatch(receiveSpot(review))
  ))
);

export const createSpot = review => dispatch => (
  APIUtil.createSpot(review).then(review => (
    dispatch(receiveSpot(review))
  ))
);
