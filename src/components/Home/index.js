import {Component} from 'react'
import Slider from 'react-slick'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import PostCard from '../PostCard'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'Failure',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    storiesApiStatus: apiStatusConstants.initial,
    postsApiStatus: apiStatusConstants.initial,
    searchApiStatus: apiStatusConstants.initial,
    userStoriesData: [],
    postsData: [],
    searchInput: '',
    searchResults: [],
    triggerSearch: false,
  }

  componentDidMount() {
    this.getUserStoriesData()
    this.getPostsData()
  }

  getFetchOptions = () => {
    const jwtToken = Cookies.get('jwt_token')
    return {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  }

  onSubmitSearchInput = async searchInput => {
    if (searchInput.length > 0)
      await this.setState({triggerSearch: true, searchInput})
    else await this.setState({triggerSearch: false, searchInput: ''})
    await this.getSearchResults()
  }

  getSearchResults = async () => {
    this.setState({searchApiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/insta-share/posts?search=${searchInput}`
    const options = this.getFetchOptions()
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedPostsData = data.posts.map(item => ({
        userId: item.user_id,
        userName: item.user_name,
        postId: item.post_id,
        profilePic: item.profile_pic,
        likesCount: item.likes_count,
        postDetails: item.post_details,
        comments: item.comments,
        createdAt: item.created_at,
        caption: item.caption,
      }))
      this.setState({
        searchResults: updatedPostsData,
        searchApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        searchApiStatus: apiStatusConstants.failure,
      })
    }
  }

  getPostsData = async () => {
    this.setState({postsApiStatus: apiStatusConstants.inProgress})
    const options = this.getFetchOptions()
    const postUrl = 'https://apis.ccbp.in/insta-share/posts'

    const response = await fetch(postUrl, options)

    const data = await response.json()

    if (response.ok === true) {
      const updatedPostsData = data.posts.map(item => ({
        userId: item.user_id,
        userName: item.user_name,
        postId: item.post_id,
        profilePic: item.profile_pic,
        likesCount: item.likes_count,
        postDetails: item.post_details,
        comments: item.comments,
        createdAt: item.created_at,
        caption: item.caption,
      }))

      this.setState({
        postsData: updatedPostsData,
        postsApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({postsApiStatus: apiStatusConstants.failure})
    }
  }

  getUserStoriesData = async () => {
    this.setState({storiesApiStatus: apiStatusConstants.inProgress})
    const options = this.getFetchOptions()
    const storyUrl = 'https://apis.ccbp.in/insta-share/stories'

    const response = await fetch(storyUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.users_stories.map(item => ({
        userId: item.user_id,
        userName: item.user_name,
        storyUrl: item.story_url,
      }))
      this.setState({
        userStoriesData: updatedData,
        storiesApiStatus: apiStatusConstants.success,
      })
    }
  }

  renderSearchResults = () => {
    const {searchResults} = this.state
    if (searchResults.length > 0) {
      return (
        <>
          <h1 className="search-result-heading">Search Results</h1>
          <ul className="posts-view-container">
            {searchResults.map(item => (
              <PostCard key={item.postId} data={item} />
            ))}
          </ul>
        </>
      )
    }
    return (
      <div className="search-container">
        <div className="search-results-not-found-container">
          <img
            src="https://res.cloudinary.com/dmu5r6mys/image/upload/v1645432829/Group_1_v48lae.png"
            alt="search not found"
            className="search-not-found-img"
          />
          <h1 className="search-not-found-heading">Search Not Found</h1>
          <p className="search-not-found-text">
            Try different keyword or search again
          </p>
        </div>
      </div>
    )
  }

  renderLoaderView = size => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={size} width={size} />
    </div>
  )

  renderPostsSomethingWenWrong = () => (
    <div className="fail-con">
      <img
        src="https://res.cloudinary.com/dmu5r6mys/image/upload/v1645288486/Group_7737_m7roxw.png"
        alt="failure view"
        className="failure view"
      />
      <p className="fail-heading">Something went wrong. Please try again</p>
      <button
        className="fail-retry"
        type="button"
        onClick={() => this.renderPosts}
      >
        Try again
      </button>
    </div>
  )

  renderSearchSomethingWenWrong = () => (
    <div className="fail-con">
      <img
        src="https://res.cloudinary.com/dmu5r6mys/image/upload/v1645288486/Group_7737_m7roxw.png"
        alt="failure view"
        className="failure view"
      />
      <p className="fail-heading">Something went wrong. Please try again</p>
      <button
        className="fail-retry"
        type="button"
        onClick={() => this.renderSearchResults}
      >
        Try again
      </button>
    </div>
  )

  renderUserStories = () => {
    const {userStoriesData} = this.state

    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 8,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 8,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 7,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 512,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    }
    return (
      <>
        <div className="user-stories-main-container">
          <ul className="slider-container">
            <Slider {...settings}>
              {userStoriesData.map(item => {
                const {userId, userName, storyUrl} = item
                return (
                  <li className="user-story-card" key={userId}>
                    <img
                      src={storyUrl}
                      className="user-story-img"
                      alt="user story"
                    />
                    <p className="user-story-name">{userName}</p>
                  </li>
                )
              })}
            </Slider>
          </ul>
        </div>
        <hr className="sm-hr-line" />
      </>
    )
  }

  renderPosts = () => {
    const {postsData} = this.state

    return (
      <ul className="posts-view-container">
        {postsData.map(item => (
          <PostCard key={item.postId} data={item} />
        ))}
      </ul>
    )
  }

  renderUserStoriesViewBasedOnApiStatus = () => {
    const {storiesApiStatus} = this.state

    switch (storiesApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView(30)
      case apiStatusConstants.success:
        return this.renderUserStories()
      default:
        return null
    }
  }

  renderPostsViewBasedOnApiStatus = () => {
    const {postsApiStatus} = this.state
    switch (postsApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView(70)
      case apiStatusConstants.success:
        return this.renderPosts()
      case apiStatusConstants.failure:
        return this.renderSearchSomethingWenWrong()
      default:
        return null
    }
  }

  renderSearchResultsViewBasedOnApiStatus = () => {
    const {searchApiStatus} = this.state
    switch (searchApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView(50)
      case apiStatusConstants.success:
        return this.renderSearchResults()
      case apiStatusConstants.failure:
        return this.renderSearchSomethingWenWrong()
      default:
        return null
    }
  }

  render() {
    const {triggerSearch} = this.state
    return (
      <>
        <Header
          activeLinkText="Home"
          onTriggerSearch={this.onSubmitSearchInput}
        />
        {!triggerSearch ? (
          <div>
            {this.renderUserStoriesViewBasedOnApiStatus()}
            {this.renderPostsViewBasedOnApiStatus()}
          </div>
        ) : (
          <div>{this.renderSearchResultsViewBasedOnApiStatus()}</div>
        )}
      </>
    )
  }
}
export default Home
