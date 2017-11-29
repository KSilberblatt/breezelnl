import React from 'react';
import { Link, withRouter, Image } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      username: "",
      password: ""
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

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <div className="authLinks">
          <Link className="authlink link" to="/signup">Sign Up</Link>
          <text className="authlink">Log In</text>
          <Link to="/login"
            onClick={this.handleDemo}
            className="authlink link">Demo</Link>
        </div>
      );
    } else {
      return (
        <div className="authLinks">
          <text className="authlink">Sign Up</text>
          <Link className="authlink link" to="/login">Log In</Link>
        </div>
      );
    }
  }

  componentWillMount(){
    this.props.clearErrors();
  }

  renderUsernameField(){
    if (this.props.formType === 'signup') { return(
      <label><br/>Username:
        <input type="text"
          placeholder="John Doe"
          value={this.state.username}
          onChange={this.update('username')}
          className="login-input"
        />
      </label>
    );}
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
    if (this.props.formType === 'signup') {
      return(
        <button
          className="login-submit-button"
          type="submit"
          ><span>Submit!</span></button>
      );
    }
    else{
      return(
        <button
          className="login-submit-button"
          type="submit"
          ><span>Log In!</span></button>
      );
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.navLink()}
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <div className="form-fields">
              <label>Email:
                <input
                  className="login-input"
                  type="text"
                  placeholder="johndoe@email.com"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </label>
              {this.renderUsernameField()}
              <br/>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
            </div>
            <br/>
            <div className="login-submit" >
              {this.renderSubmitButton()}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(BookingForm);
