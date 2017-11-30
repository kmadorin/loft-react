import React, {Component} from 'react';
import * as AuthorizeApi from './AuthorizeApi';
import { Redirect } from 'react-router-dom';

class Auth extends Component {
  state = {
    email: '',
    password: '',
    error: false,
    isAuthorized: false
  }

  renderRedirect = () => {
    const { isAuthorized } = this.state;

    if( isAuthorized ) {
      return <Redirect to="/" />
    }
  }
  handleSubmit = (e) => {
    const { email, password } = this.state
    this.setState({
      isAuthorized: AuthorizeApi.authorizeUser(email, password),
      error: !AuthorizeApi.authorizeUser(email, password)
    })
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  renderError = () => {
    const { error } = this.state;
    if (error) {
      return <p className="error">Неправильный пароль или почта</p>
    };
  }
  render() {
    return (
      <div>
        <input onChange={ this.handleChange } name="email" type="email" />
        <input onChange={ this.handleChange } name="password" type="password" />
        <button onClick={ this.handleSubmit }>Submit</button>
        { this.renderError() }
        { this.renderRedirect() }
      </div>
    );
  }
}

export default Auth;
