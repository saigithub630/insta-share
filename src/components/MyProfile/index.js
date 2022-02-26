import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import MyProfileItem from '../MyProfileItem'
import './index.css'

class MyProfile extends Component {
  state = {
    profileData: [],
  }

  componentDidMount() {
    this.getProfileData()
  }

  getProfileData = async () => {
    const url = 'https://apis.ccbp.in/insta-share/my-profile'

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

      const updatedData = {
        followersCount: data.profile.followers_count,
        followingCount: data.profile.following_count,
        profileId: data.profile.id,
        postsCount: data.profile.posts_count,
        profilePic: data.profile.profile_pic,
        userBio: data.profile.user_bio,
        userId: data.profile.user_id,
        userName: data.profile.user_name,
        postsImage1: data.profile.posts[0].image,
        postsImage2: data.profile.posts[1].image,
        postsImage3: data.profile.posts[2].image,
        storiesImage1: data.profile.stories[0].image,
        storiesImage2: data.profile.stories[1].image,
        storiesImage3: data.profile.stories[2].image,
      }

      this.setState({profileData: updatedData})
    }
  }

  render() {
    const {profileData} = this.state
    return (
      <div>
        <Header />
        <MyProfileItem key={profileData.userId} profileData={profileData} />
      </div>
    )
  }
}

export default MyProfile
