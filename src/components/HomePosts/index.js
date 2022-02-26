import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import PostCard from '../PostCard'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class HomePosts extends Component {
  state = {
    postDetails: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    const url = 'https://apis.ccbp.in/insta-share/posts'
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
      const updatedPostDetails = data.posts.map(eachComments => ({
        postId: eachComments.post_id,
        profilePic: eachComments.profile_pic,
        userId: eachComments.user_id,
        userName: eachComments.user_name,
        createdAt: eachComments.created_at,
        likesCount: eachComments.likes_count,
        postImgUrl: eachComments.post_details.image_url,
        caption: eachComments.post_details.caption,
        commentsList: eachComments.comments.map(each => each.comment),
        userIdList: eachComments.comments.map(each => each.user_id),
        userNamesList: eachComments.comments.map(each => each.user_name),
      }))

      this.setState({
        postDetails: updatedPostDetails,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#4094EF" height="50" width="50" />
    </div>
  )

  renderPostsView = () => {
    const {postDetails} = this.state

    return (
      <ul className="post-card-container">
        {postDetails.map(eachPost => (
          <PostCard key={eachPost.postId} postDetails={eachPost} />
        ))}
      </ul>
    )
  }

  renderAllPosts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPostsView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return this.renderAllPosts()
  }
}

export default HomePosts
