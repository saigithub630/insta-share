import {Component} from 'react'
import Slider from 'react-slick'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import StoryItem from '../StoryItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class Stories extends Component {
  state = {
    userStories: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getStoriesData()
  }

  getStoriesData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/insta-share/stories'

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.users_stories.map(eachStorie => ({
        id: eachStorie.user_id,
        storyUrl: eachStorie.story_url,
        userName: eachStorie.user_name,
      }))

      this.setState({
        userStories: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#4094EF" height="50" width="50" />
    </div>
  )

  renderStoryView = () => {
    const {userStories} = this.state
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
    }

    return (
      <div className="story-container">
        <Slider {...settings}>
          {userStories.map(eachStory => (
            <StoryItem key={eachStory.id} storyDetails={eachStory} />
          ))}
        </Slider>
      </div>
    )
  }

  renderStories = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderStoryView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderStories()}</>
  }
}

export default Stories
