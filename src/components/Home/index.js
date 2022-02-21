import {Component} from 'react'
import {HomeContainer, HrLine} from './styledComponents'
import Header from '../Header'

// import Stories from '../Stories'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <HomeContainer>
          <HrLine />
        </HomeContainer>
      </>
    )
  }
}

export default Home
