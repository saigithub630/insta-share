import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsHeart} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
import './index.css'

class PostCard extends Component {
  render() {
    const {postDetails} = this.props

    const {
      userId,
      profilePic,
      userName,
      createdAt,
      likesCount,
      postImgUrl,
      caption,
      commentsList,
      userNamesList,
    } = postDetails

    return (
      <li className="list-container">
        <div className="profile-container">
          <div className="img-background">
            <img
              src={profilePic}
              alt="profile author pic"
              className="profile-pic"
            />
          </div>
          <Link to={`/users/${userId}`}>
            <h1 className="user-name">{userName}</h1>
          </Link>
        </div>
        <div className="post-img-container">
          <img src={postImgUrl} alt="post" className="post-img" />
        </div>
        <div className="icons-container">
          <button type="button" testid="likeIcon" className="like-button">
            <BsHeart className="icons" size={25} />
          </button>
          <FaRegComment className="icons" size={25} />
          <BiShareAlt className="icons" size={25} />
        </div>
        <p className="likes-count">{likesCount} Likes</p>
        <p className="caption">{caption}</p>
        <p className="comments">
          <span>{userNamesList[0]}</span>
          {commentsList[0]}
        </p>
        <p className="comments">
          <span>{userNamesList[1]}</span>
          {commentsList[1]}
        </p>
        <p className="created-at">{createdAt}</p>
      </li>
    )
  }
}

export default PostCard
