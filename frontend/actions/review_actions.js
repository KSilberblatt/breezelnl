import * as APIUtil from '../util/review_api_util';


export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';


export const clearReviewErrors = () =>({
  type: CLEAR_REVIEW_ERRORS
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
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

export const createReview = reviewForm => dispatch => (
  APIUtil.createReview(reviewForm).then((review) => (
    dispatch(receiveReview(review))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  )).then(() => dispatch(clearReviewErrors()))
);
