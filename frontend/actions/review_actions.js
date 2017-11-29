import * as APIUtil from '../util/review_api_util';


export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () =>({
  type: CLEAR_ERRORS
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});


export const fetchReviews = filters => dispatch => (
  APIUtil.fetchReviews(filters).then(reviews => (
    dispatch(receiveReviews(reviews))
  ))
);

export const fetchReview = id => dispatch => (
  APIUtil.fetchReview(id).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);
