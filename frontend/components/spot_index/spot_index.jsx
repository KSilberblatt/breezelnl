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
    console.log(typeof(this.props.spots.length));
    if (typeof(this.props.spots.length) === "undefined"){
      return(
        <div>EMPTY</div>
      );
    }
    console.log(this.props.spots, "once");
    return(
      <div>
        {this.props.spots.map((spot) => (
          this.renderSpot(spot)
        ))}
      </div>
    );
  }
  renderSpot(spot){
    return (
      <div className="spot-container">
        <img className="image-thumbnail" src={spot.image_url} />
        <h1 className="spot-category">{spot.category}</h1>
        <h1 className="spot-title">{spot.title}</h1>
        <h1 className="spot-price">From ${spot.price} per night</h1>

      </div>
    );
  }
  render(){
    console.log(this.props.spots, "<--");
    return (
      <div className="spot-index">
        {this.renderSpots()}
      </div>
    );
  }
}
export default SpotIndex;
