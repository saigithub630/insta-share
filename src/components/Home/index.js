import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import HomePosts from '../HomePosts'
import Stories from '../Stories'
import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="page-container">
        <Stories />
        <HomePosts />
      </div>
    </>
  )
}

export default Home
