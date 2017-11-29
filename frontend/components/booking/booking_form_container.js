import { login, signup, logout, clearErrors } from '../../actions/booking_actions';
import { connect } from 'react-redux';

import { fetchBooking } from '../../actions/booking_actions';
import { selectBooking } from '../../reducers/selectors';
import BookingForm from './booking_form';

const mapStateToProps = (state, { match }) => {
  const userId = parseInt(match.params.userId);
  const spotId = parseInt(match.params.spotId);
  const bookingId = parseInt(match.params.bookingId);
  const booking = selectBooking(state.entities, match.params.bookingId);
  return {
    bookingId,
    booking
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBooking: id => dispatch(fetchBooking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
