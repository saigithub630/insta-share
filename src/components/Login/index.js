import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserNameField = () => {
    const {username} = this.state
    return (
      <div className="username-container">
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          className="input"
          type="text"
          id="username"
          value={username}
          onChange={this.changeUsername}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password, showSubmitError, errorMsg} = this.state

    return (
      <div className="password-container">
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          className="input"
          type="password"
          id="password"
          value={password}
          onChange={this.changePassword}
        />
        {showSubmitError && <p className="error-msg">{errorMsg}</p>}
      </div>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <img
          alt="website login"
          className="login-img"
          src="https://res.cloudinary.com/dfww8i8em/image/upload/v1645333550/Layer_2loginImage__bo5iix.png"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="logo-inst-text">
            <img
              src="https://res.cloudinary.com/dfww8i8em/image/upload/v1645334921/Standard_Collection_8_xv8lnb.png"
              alt="website logo"
              className="login-logo"
            />
            <h1 className="inst-text">Inst Share</h1>
            {this.renderUserNameField()}
            {this.renderPasswordField()}

            <div className="login-btn-container">
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
