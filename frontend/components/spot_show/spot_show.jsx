import React from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../booking/booking_form';
import ReviewForm from '../review/review_form';

class SpotShow extends React.Component{
  constructor( props ) {
    console.log(props, "<----");

    super(props);
    this.errors=props.errors;
    this.spotId=props.spotId;
    this.currentUser=props.currentUser;
    this.clearErrors=props.clearErrors;
    this.submitBooking=props.submitBooking;
    }

  componentDidMount(){
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.spotId !== nextProps.match.params.spotId) {
      this.props.fetchSpot(nextProps.match.params.spotId);
    }
  }

  render(){
    const { spot } = this.props;
    return (
      <div className="spot-index">
        <div className="index-image">
          <img src={spot.image_url}/>
        </div>
        <div className="below-image">
          <div className="description-feed">
            <ul className="spot-nav-bar">
              <li><a>Overview</a></li>
              <li><a>Reviews</a></li>
              <li><a>The Host</a></li>
              <li><a>Location</a></li>
            </ul>
            <ul className="spot-overview">
              <li><h1>{spot.title}</h1></li>
              <li><h2>{spot.category}</h2></li>
              <li><p>{spot.description}</p></li>
            </ul>
            <br/>
            <div className="review-form">
              <ReviewForm spotId={this.spotId}
                currentUser={this.currentUser}
                clearErrors={this.clearErrors}/>
            </div>
          </div>
          <div className="booking-form">
            <BookingForm spotId={this.props.spotId}
              submitBooking={this.props.submitBooking}
              currentUser={this.props.currentUser}
              errors={this.props.errors}
              clearErrors={this.props.clearErrors}/>
          </div>
        </div>
      </div>
    );
  }
}
export default SpotShow;
