import React from 'react';
import { Link, withRouter, Image } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      user_id: props.currentUser.id,
      spot_id: props.spotId
    };
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
    const user = this.state;
    this.props.processForm({user});
  }
  handleSubmitLink(e) {
    const user = this.state;
    this.props.processForm({user});
  }

  renderHeader() {
    return (
      <div className="review-form-header">
        <h3>Review: </h3>
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
        ><span>Submit Review!</span></button>
    );
  }

  render() {
    return (
      <div className="booking-form-container">
        {this.renderInfo()}
        <div className="dates-guest-form">
          <span class="rating">
            <input type="radio" class="rating-input"
                   id="rating-input-1-5" name="rating-input-1" />
            <label for="rating-input-1-5" class="rating-star"></label>
            <input type="radio" class="rating-input"
                   id="rating-input-1-4" name="rating-input-1" />
            <label for="rating-input-1-4" class="rating-star"></label>
            <input type="radio" class="rating-input"
                   id="rating-input-1-3" name="rating-input-1" />
            <label for="rating-input-1-3" class="rating-star"></label>
            <input type="radio" class="rating-input"
                   id="rating-input-1-2" name="rating-input-1" />
            <label for="rating-input-1-2" class="rating-star"></label>
            <input type="radio" class="rating-input"
                   id="rating-input-1-1" name="rating-input-1" />
            <label for="rating-input-1-1" class="rating-star"></label>
          </span>
          <textarea />
        </div>
        {this.renderSubmitButton()}
      </div>
    );
  }
}

export default withRouter(ReviewForm);
