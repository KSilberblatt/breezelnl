import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';
import SpotIndex from './spot_index';


const mapStateToProps = (state, { match }) => {
  const spotId = parseInt(match.params.spotId);
  const spots = state.entities.spots;
  return {
    spotId,
    spots
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSpots: filters => dispatch(fetchSpots(filters)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex);
