import {Component} from 'react'

import Cookies from 'js-cookie'
import ProfileItem from '../UserProfileItem'
import Header from '../Header'

class UserProfile extends Component {
  state = {
    userDetails: [],
  }

  componentDidMount() {
    this.getUserProfileData()
  }

  getUserProfileData = async () => {
    const {match} = this.props
    const {params} = match
    const {userId} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/insta-share/users/${userId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        followersCount: data.user_details.followers_count,
        followingCount: data.user_details.following_count,
        profileId: data.user_details.id,
        postsCount: data.user_details.posts_count,
        profilePic: data.user_details.profile_pic,
        userBio: data.user_details.user_bio,
        userId: data.user_details.user_id,
        userName: data.user_details.user_name,
        postsImage1: data.user_details.posts[0].image,
        postsImage2: data.user_details.posts[1].image,
        postsImage3: data.user_details.posts[2].image,
        storiesImage1: data.user_details.stories[0].image,
        storiesImage2: data.user_details.stories[1].image,
        storiesImage3: data.user_details.stories[2].image,
      }
      this.setState({userDetails: updatedData})
    }
  }

  renderUserData = () => {
    const {userDetails} = this.state
    return (
      <>
        <Header />
        <div className="profile-item-container">
          <ProfileItem key={userDetails.userId} userDetails={userDetails} />
        </div>
      </>
    )
  }

  render() {
    return this.renderUserData()
  }
}

export default UserProfile
