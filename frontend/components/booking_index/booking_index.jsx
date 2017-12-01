import React from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from '../review/review_form';

class BookingIndex extends React.Component{
  constructor( props ) {

    super(props);
    }

  componentDidMount(){
    this.props.fetchSpots();
    this.props.fetchBookings();
    // this.props.receiveCurrentUser();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.bookings !== nextProps.match.params.bookings) {
      this.props.fetchBookings();
    }
    if (this.props.match.params.spots !== nextProps.match.params.spots) {
      this.props.fetchSpots();
    }
  }
  renderSpots(){
    let myBookings = this.props.bookings;
    let bookings = $.map(myBookings, function(value, index) {
      return [value];
    });
    if (typeof(bookings.length) === "undefined"){
      return(
        <div></div>
      );
    }
    return(
      <div className="spot-index">
        {bookings.map((booking) => (
          <div key={`booking-${booking.id}`}>
            {this.renderBooking(booking)}
          </div>
        ))}
      </div>
    );
  }
  handlePath(id){
    return "/spots/"+id;
  }
  renderBooking(booking){
    let startDate = new Date (booking.start_date);
    let endDate = new Date (booking.end_date);
    if (booking.user.id !== this.props.currentUser.id ){
      return;
    }
    return (
      <Link to={this.handlePath(booking.spot.id)} className="spot-container">
        <img className="image-thumbnail" src={booking.spot.image_url} />
        <h1 className="spot-category">{booking.spot.category}</h1>
        <h1 className="spot-title">{booking.spot.title}</h1>
        <br/>
        <h1 className="booking-date">
          Check In: {startDate.toDateString()}</h1>
        <h1 className="booking-date">
          Check Out: {endDate.toDateString()}</h1>

      </Link>
    );
  }
  render(){
    return (
      <div>
        <br/>
        <h2 className="booking-index-title">
          {this.props.currentUser.username}&#39;s Bookings:
        </h2>
        {this.renderSpots()}
      </div>
    );
  }
}
export default BookingIndex;
