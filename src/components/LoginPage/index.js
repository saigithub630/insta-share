import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginPageContainer,
  LoginImg,
  LoginFormContainer,
  LoginFormLogo,
  LogoText,
  LogoAndText,
  UserDetails,
  Label,
  Input,
  LoginBtn,
  UserDetailsContainer,
  SubmitError,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    userName: '',
    password: '',
    showSubmitError: false,
  }

  changeUserName = event => {
    this.setState({userName: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitError = () => {
    this.setState({showSubmitError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const LoginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitError()
    }
  }

  render() {
    const {userName, password, showSubmitError} = this.state
    return (
      <LoginPageContainer>
        <LoginImg src="https://res.cloudinary.com/dfww8i8em/image/upload/v1645333550/Layer_2loginImage__bo5iix.png" />
        <LoginFormContainer onSubmit={this.submitForm}>
          <LogoAndText>
            <LoginFormLogo src="https://res.cloudinary.com/dfww8i8em/image/upload/v1645334921/Standard_Collection_8_xv8lnb.png" />
            <LogoText>Insta Share</LogoText>
          </LogoAndText>
          <UserDetailsContainer>
            <UserDetails>
              <Label htmlFor="username">USERNAME</Label>
              <Input
                id="username"
                type="text"
                onChange={this.changeUserName}
                value={userName}
              />
            </UserDetails>
            <UserDetails>
              <Label htmlFor="password">PASSWORD</Label>
              <Input
                id="password"
                type="password"
                onChange={this.changePassword}
                value={password}
              />
              {showSubmitError && (
                <SubmitError>Username or Password is Invalid</SubmitError>
              )}
              <LoginBtn type="submit">Login</LoginBtn>
            </UserDetails>
          </UserDetailsContainer>
        </LoginFormContainer>
      </LoginPageContainer>
    )
  }
}

export default LoginPage
