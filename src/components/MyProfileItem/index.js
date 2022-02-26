import {BsGrid3X3} from 'react-icons/bs'
import './index.css'

const UserProfileItem = props => {
  const {profileData} = props
  const {
    followersCount,
    followingCount,
    postsCount,
    profilePic,
    userBio,
    userId,
    userName,
    postsImage1,
    postsImage2,
    postsImage3,
    storiesImage1,
    storiesImage2,
    storiesImage3,
  } = profileData

  return (
    <div className="main-container">
      <div className="pic-details">
        <img src={profilePic} alt="my Profile" className="user-profile" />
        <div className="details-container">
          <h1 className="user-name">{userName}</h1>
          <div className="counting-container">
            <p className="post">
              <span>{postsCount}</span> Posts
            </p>
            <p className="followers">
              <span>{followersCount}</span> Following
            </p>
            <p className="following">
              <span>{followingCount}</span> Followers
            </p>
          </div>
          <h1 className="user-id">{userId}</h1>
          <p className="user-bio">{userBio}</p>
        </div>
      </div>
      <div className="stories-container">
        <div className="story-circle">
          <img src={storiesImage1} alt="my story" className="user-story" />
        </div>
        <div className="story-circle">
          <img src={storiesImage2} alt="my story" className="user-story" />
        </div>
        <div className="story-circle">
          <img src={storiesImage3} alt="my story" className="user-story" />
        </div>
      </div>
      <hr className="hr-line" />
      <div className="grid">
        <BsGrid3X3 size={30} />
        <h1 className="posts">Posts</h1>
      </div>
      <div className="posts-container">
        <img src={postsImage1} className="post-img" alt="my post" />
        <img src={postsImage2} className="post-img" alt="my post" />
        <img src={postsImage3} className="post-img" alt="my post" />
      </div>
    </div>
  )
}

export default UserProfileItem
