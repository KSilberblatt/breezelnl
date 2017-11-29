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
        <h3>Leave a Review!    </h3>
          <span className="rating">
            <input type="radio" className="rating-input"
                   id="rating-input-1-5" name="rating-input-1" />
                 <label htmlFor="rating-input-1-5"
                   className="rating-star">&#9733;</label>
            <input type="radio" className="rating-input"
                   id="rating-input-1-4" name="rating-input-1" />
                 <label htmlFor="rating-input-1-4"
                   className="rating-star">&#9733;</label>
            <input type="radio" className="rating-input"
                   id="rating-input-1-3" name="rating-input-1" />
                 <label htmlFor="rating-input-1-3"
                   className="rating-star">&#9733;</label>
            <input type="radio" className="rating-input"
                   id="rating-input-1-2" name="rating-input-1" />
                 <label htmlFor="rating-input-1-2"
                   className="rating-star">&#9733;</label>
                 <input type="radio" className="rating-input" checked
                   id="rating-input-1-1" name="rating-input-1" />
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
      <div className="booking-form-container">
        {this.renderHeader()}
        <div className="rating-form">
          <textarea />
        </div>
        {this.renderSubmitButton()}
      </div>
    );
  }
}

export default withRouter(ReviewForm);
