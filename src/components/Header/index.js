import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import {
  HeaderContainer,
  LogoAndTextContainer,
  Logo,
  InstaText,
  RightSideContainer,
  SearchContainer,
  Input,
  SearchBtn,
  NavLinksContainer,
  Home,
  Profile,
  LogoutBtn,
} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <LogoAndTextContainer>
          <Logo src="https://res.cloudinary.com/dfww8i8em/image/upload/v1645334921/Standard_Collection_8_xv8lnb.png" />
          <InstaText>Insta Share</InstaText>
        </LogoAndTextContainer>
        <RightSideContainer>
          <SearchContainer>
            <Input type="search" placeholder="Search Caption" />

            <SearchBtn>
              <FaSearch size={17} color="#989898" />
            </SearchBtn>
          </SearchContainer>
          <NavLinksContainer>
            <Home>Home</Home>
            <Profile>Profile</Profile>
            <LogoutBtn>Logout</LogoutBtn>
          </NavLinksContainer>
        </RightSideContainer>
      </HeaderContainer>
    )
  }
}

export default Header
