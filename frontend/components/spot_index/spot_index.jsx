import React from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../booking/booking_form';
import ReviewForm from '../review/review_form';

class SpotIndex extends React.Component{
  constructor( props ) {

    super(props);
    }

  componentDidMount(){
    this.props.fetchSpots();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.spots !== nextProps.match.params.spots) {
      this.props.fetchSpots();
    }
  }
  renderSpots(){
    if (typeof(this.props.spots.length) === "undefined"){
      return(
        <div></div>
      );
    }
    return(
      <div className="spot-index">
        {this.props.spots.map((spot) => (
          <div key={`spot-${spot.id}`}>
            {this.renderSpot(spot)}
          </div>
        ))}
      </div>
    );
  }
  handlePath(id){
    return "/spots/"+id;
  }
  renderSpot(spot){
    return (
      <Link to={this.handlePath(spot.id)} className="spot-container">
        <img className="image-thumbnail" src={spot.image_url} />
        <h1 className="spot-category">{spot.category}</h1>
        <h1 className="spot-title">{spot.title}</h1>
        <h1 className="spot-price">From ${spot.price} per night</h1>

      </Link>
    );
  }
  render(){
    return (
      <div>
        <h2 className="booking-index-title">Browse Our Homes!
        </h2>
        {this.renderSpots()}
      </div>
    );
  }
}
export default SpotIndex;
