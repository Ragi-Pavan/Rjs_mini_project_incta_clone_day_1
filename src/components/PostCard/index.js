import './index.css'

import {Component} from 'react'

import {BsHeart} from 'react-icons/bs'

import {FaRegComment} from 'react-icons/fa'

import {BiShareAlt} from 'react-icons/bi'

import {FcLike} from 'react-icons/fc'

class PostCard extends Component {
  clikedOnLike = id => {
    const {ClikedOnLikeOrUnlike} = this.props
    ClikedOnLikeOrUnlike(id, true)
  }

  clikedOnUnLike = id => {
    const {ClikedOnLikeOrUnlike} = this.props
    ClikedOnLikeOrUnlike(id, false)
  }

  render() {
    const {postData} = this.props
    const {
      userId,
      profilePic,
      userName,
      imageUrl,
      likesCount,
      caption,
      comments,
      createdAt,
      postId,
      message,
    } = postData

    const Islike = message === 'Post has been liked'

    return (
      <li key={userId} className="list-item">
        <div className="larger-one">
          <div className="profilePicContainer">
            <img src={profilePic} alt={userName} className="profilepic" />
            <p className="user-name">{userName}</p>
          </div>
          <div>
            <img src={imageUrl} alt={userId} className="Image" />
          </div>
          <div className="informaton">
            <div className="icons-container">
              {Islike ? (
                <FcLike
                  className="iconz"
                  onClick={() => {
                    this.clikedOnUnLike(postId)
                  }}
                />
              ) : (
                <BsHeart
                  className="iconz"
                  onClick={() => {
                    this.clikedOnLike(postId)
                  }}
                />
              )}
              <FaRegComment className="iconz" />
              <BiShareAlt className="iconz" />
            </div>
            <div className="info">
              <p className="likes-para">{likesCount} Likes</p>
              <p className="discription">{caption}</p>
              <ul className="ul-for-comments">
                {comments.map(each => (
                  <li key={each.user_id} className="list-for-comment">
                    <p className="commnets">
                      <span className="spanl">{each.user_name}</span>_
                      {each.comment}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="time">{createdAt}</p>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default PostCard
