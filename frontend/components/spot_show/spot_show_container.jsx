import { connect } from 'react-redux';
import { clearErrors } from '../../actions/booking_actions';
import { fetchSpot } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';
import SpotShow from './spot_show';

const mapStateToProps = (state, { match }) => {
  const currentUser = state.session.currentUser;
  const spotId = parseInt(match.params.spotId);
  const spot = selectSpot(state.entities, match.params.spotId);
  return {
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
)(SpotShow);
