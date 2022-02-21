import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 64px;
  background: #ffffff;
  padding: 20px;
`
export const LogoAndTextContainer = styled.div`
  display: flex;
  width: 180px;
`
export const Logo = styled.img`
  height: 30px;
  width: 60px;
  margin-top: 5px;
`

export const InstaText = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #262626;
  margin-left: 15px;
`
export const RightSideContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const SearchContainer = styled.div`
  display: flex;
`

export const Input = styled.input`
  width: 100%;
  height: 20px;
  background: #fafafa;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 22px;
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
`

export const SearchBtn = styled.button`
  background: #dbdbdb;
  border-radius: 0px 2px 2px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-style: none;
  height: 45px;
`

export const NavLinksContainer = styled.div`
  display: flex;
  width: 450px;
  justify-content: space-around;
`
export const Home = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-top: 25px;
  display: flex;
  align-items: center;
`
export const Profile = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  margin-top: 25px;
`
export const LogoutBtn = styled.button`
  background: #4094ef;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
  height: 40px;
  width: 130px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  border: none;
`
