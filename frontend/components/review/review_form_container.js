import { connect } from 'react-redux';

import { receiveCurrentUser } from '../../actions/session_actions';
import { fetchSpot } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';
import { selectBooking } from '../../reducers/selectors';
import { clearErrors } from '../../actions/booking_actions';
import BookingForm from './booking_form';

const mapStateToProps = (state, { match }) => {
  const spotId = parseInt(match.params.spotId);
  const spot = selectSpot(state.entities, match.params.spotId);
  const userId = parseInt(state.session.currentUser.id);
  const currentUser = state.session.currentUser;
  return {
    userId,
    spotId,
    spot,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSpot: id => dispatch(fetchSpot(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
