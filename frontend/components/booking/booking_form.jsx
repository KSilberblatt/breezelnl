import React from 'react';
import { Link, withRouter, Image } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: props.currentUser.id,
      spot_id: props.spotId
    };
    console.log(this.state, "<======");
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = this.state;
    console.log(this.state);
    console.log(this.props);
    this.props.submitBooking({booking});
  }

  renderInfo() {
    return (
      <div className="booking-info">
        <h3>Price per night</h3>
        <h4>Average rating: </h4>
      </div>
    );
  }

  componentWillMount(){
    this.props.clearErrors();
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderSubmitButton(){
    return(
      <button
        className="login-submit-button"
        type="submit"
        ><span>Request to Book!</span></button>
    );
  }

  render() {
    return (
      <div className="booking-form-container">
        {this.renderInfo()}
        <form onSubmit={this.handleSubmit} className="dates-guest-form">
          <label>Check In
            <input
              onChange={this.update('start_date')}
              id="start-date" type="date"/>
          </label>
          <label>Check Out
            <input
              onChange={this.update('end_date')}
              id="end-date" type="date"/>
          </label>
          <select value={this.state.num_guests}
            onChange={this.update('num_guests')}
            className="guests" name="guests">
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
          </select>
          {this.renderSubmitButton()}
        </form>

      </div>
    );
  }
}

export default withRouter(BookingForm);
