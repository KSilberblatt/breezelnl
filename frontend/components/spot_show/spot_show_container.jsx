import { connect } from 'react-redux';
import { clearErrors, createBooking } from '../../actions/booking_actions';
import { clearReviewErrors, createReview, fetchReviews } from '../../actions/review_actions';
import { fetchSpot } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';
import SpotShow from './spot_show';

const mapStateToProps = (state, { match }) => {
  const currentUser = state.session.currentUser;
  const spotId = parseInt(match.params.spotId);
  const spot = selectSpot(state.entities, match.params.spotId);
  const errors = state.errors.booking;
  const reviewErrors = state.errors.review;
  return {
    spotId,
    spot,
    currentUser,
    errors,
    reviewErrors
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSpot: id => dispatch(fetchSpot(id)),
  fetchReviews: id => dispatch(fetchReviews()),
  clearErrors: () => dispatch(clearErrors()),
  clearReviewErrors: () => dispatch(clearReviewErrors()),
  submitBooking: (data) => dispatch(createBooking(data)),
  submitReview: (data) => dispatch(createReview(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
