import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import { fetchBookings } from '../../actions/booking_actions';
import { receiveCurrentUser } from '../../actions/session_actions';
import { selectSpot } from '../../reducers/selectors';
import BookingIndex from './booking_index';


const mapStateToProps = (state, { match }) => {
  const spots = state.entities.spots;
  const bookingId = parseInt(match.params.bookingId);
  const bookings = state.entities.bookings;
  const currentUser = state.session.currentUser;
  return {
    spots,
    bookingId,
    bookings,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSpots: filters => dispatch(fetchSpots(filters)),
  fetchBookings: filters => dispatch(fetchBookings(filters)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex);
