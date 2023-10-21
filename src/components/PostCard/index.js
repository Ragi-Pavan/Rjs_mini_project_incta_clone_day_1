import './index.css'

import {Component} from 'react'

import {BsHeart} from 'react-icons/bs'

import {FaRegComment} from 'react-icons/fa'

import {BiShareAlt} from 'react-icons/bi'


class PostCard extends Component {
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
    } = postData

    return (
      <li key={userId} className="list-item">
        <div className="larger-one">
          <div className="profilePicContainer">
            <img src={profilePic} alt={userName} className="profilepic" />
            <p className="user-name">{userName}</p>
          </div>
          <div>
            <img src={imageUrl} alt={RawData.userId} className="Image" />
          </div>
          <div className="informaton">
            <div className="icons-container">
              <BsHeart className="iconz" />
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
              <p className="time">{RawData.createdAt}</p>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default PostCard
