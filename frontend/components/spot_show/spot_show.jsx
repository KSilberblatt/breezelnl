import React from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../booking/booking_form';
import ReviewForm from '../review/review_form';

class SpotShow extends React.Component{
  constructor( props ) {
    super(props);
    }

  componentWillMount(){
    this.props.fetchSpot(this.props.spotId);
    this.props.fetchReviews();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.spotId !== nextProps.match.params.spotId) {
      this.props.fetchSpot(nextProps.match.params.spotId);
    }

  }

  renderReviews(){

    let myReviews = this.props.reviews;
    let reviews = $.map(myReviews, function(value, index) {
      return [value];
    });
    if (typeof(reviews.length) === "undefined"){
      return(
        <div></div>
      );
    }
    return (
      <ul className="previous-reviews">
        {reviews.map((review, i) => {
          if (review.spot.id !== this.props.spotId)
          return;
          return(
          <li className="review-div" key={`review-${review.id}`}>
            {this.renderReview(review)}
          </li>
        );})}
      </ul>
    );
  }

  renderReview(review){
    let stars =[];
    for (let i = 0; i < review.rating; i++) {
      stars.push(<h3 key={`star-${i}`}>&#9733;</h3>);
    }
    return(
      <div>
        <h3 className="review-owner">{review.user.username}</h3>
        <div className="review-stars">{stars}</div>
        <br/>
        <h3>{review.description}</h3>
      </div>
    );
  }

  render(){
    const { spot } = this.props;
    if (typeof(spot.owner) === "undefined"){
      return(
        <div></div>
      );
    }
    return (
      <div className="spot-show">
        <div className="spot-image">
          <img src={spot.image_url}/>
        </div>
        <div className="below-image">
          <div className="description-feed">
            <ul className="spot-nav-bar">
              <li><a>The Host</a></li>
              <li><a>Overview</a></li>
              <li><a>Reviews</a></li>
            </ul>
            <br/>
            <h2>Host: {spot.owner.username}</h2>
            <br/>
            <ul className="spot-overview">
              <li><h1>{spot.title}</h1></li>
              <li><h2>{spot.category}</h2></li>
              <br/>
              <li><p>{spot.description}</p></li>
              <br/>
            </ul>
            <br/>
            <div className="review-form">
              <h1 className="reviews-title">Reviews:</h1>
              <br/>
              {this.renderReviews()}
              <ReviewForm spotId={this.props.spotId}
                submitReview={this.props.submitReview}
                currentUser={this.props.currentUser}
                errors={this.props.reviewErrors}
                clearErrors={this.props.clearReviewErrors}
                spotShow={this}/>
            </div>
            <br/>
          </div>
          <div className="booking-form">
            <BookingForm spotId={this.props.spotId}
              spot = {spot}
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
