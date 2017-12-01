import React from 'react';
import { Link, withRouter, Image } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
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
    if(field === "rating"){
      return e => this.setState({
        [field]: parseInt(e.currentTarget.value)
      });
    }
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = this.state;
    this.props.submitReview({review}).then(this.resetFields());
  }

  resetFields(){
    document.getElementById("review-form").reset();
    this.update("rating");
    this.update("description");
  }

  renderHeader() {
    return (
      <div className="review-form-header">
        <h3>Leave a Review!    </h3>
          {this.renderErrors()}
          <span className="rating">
            <input type="radio" value="5"
              onChange={this.update('rating')}
              className="rating-input"
              id="rating-input-1-5" name="rating" />
                 <label htmlFor="rating-input-1-5"
                   className="rating-star">&#9733;</label>
            <input type="radio" value="4"
              onChange={this.update('rating')}
              className="rating-input"
                   id="rating-input-1-4" name="rating" />
                 <label htmlFor="rating-input-1-4"
                   className="rating-star">&#9733;</label>
            <input type="radio" value="3"
              onChange={this.update('rating')}
              className="rating-input"
                   id="rating-input-1-3" name="rating" />
                 <label htmlFor="rating-input-1-3"
                   className="rating-star">&#9733;</label>
                 <input type="radio" value="2"
                   onChange={this.update('rating')}
                   className="rating-input"
                   id="rating-input-1-2" name="rating" />
                 <label htmlFor="rating-input-1-2"
                   className="rating-star">&#9733;</label>
            <input type="radio" value="1"
              onChange={this.update('rating')}
              className="rating-input"
                   id="rating-input-1-1" name="rating" />
                 <label htmlFor="rating-input-1-1"
                   className="rating-star">&#9733;</label>
          </span>
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
      <div>
        <form id="review-form" onSubmit={this.handleSubmit}
          className="booking-form-container">
          {this.renderHeader()}
          <div className="rating-form">
            <textarea className="rating-form"
              onChange={this.update('description')}
              />
          </div>
          <br/>
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
