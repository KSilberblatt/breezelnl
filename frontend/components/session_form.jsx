import React from 'react';
import { Link, withRouter, Image } from 'react-router-dom';

class SessionForm extends React.Component {
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

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <div className="authLinks">
          <Link className="authlink link" to="/signup">Sign Up</Link>
          <text className="authlink">Log In</text>
          <Link className="authlink link" to="/login">Demo User</Link>
        </div>
      );
    } else {
      return (
        <div className="authLinks">
          <text className="authlink">Sign Up</text>
          <Link className="authlink link" to="/login">Log In</Link>
          <Link className="authlink link" to="/login">Demo User</Link>
        </div>
      );
    }
  }

  renderUsernameField(){
    if (this.props.formType === 'signup') { return(
      <label><br/>Username:
        <input type="text"
          value={this.state.username}
          onChange={this.update('username')}
          className="login-input"
        />
      </label>
    );}
  }

  renderErrors() {
    console.log(this.props);
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <div className="form-fields">
              <label>Email:
                <input
                  className="login-input"
                  type="text"
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
              <input
                className="login-submit-button"
                type="submit"
                value="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
