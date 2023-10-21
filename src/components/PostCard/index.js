import './index.css'

import {Component} from 'react'

import {BsHeart} from 'react-icons/bs'

import {FaRegComment} from 'react-icons/fa'

import {BiShareAlt} from 'react-icons/bi'

const RawData = {
  caption: 'Another day, another sunrise',
  createdAt: '4 Hours Ago',
  imageUrl:
    'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-1-img.png',
  likesCount: 7,
  postId: 'f25d77f0-602e-41d1-971e-4b8cf54709eb',
  profilePic:
    'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-1-img.png',
  userId: 'Varun_Aadithya',

  userName: 'Varun Aadithya',
  comments: [
    {
      user_name: 'Prabuddha Dasgupta',
      user_id: 'Prabuddha_Dasgupta',
      comment: 'Lightning is incredible.',
    },

    {
      user_name: 'Gautam Rajadhyaksha',
      user_id: 'Gautam_Rajadhyaksha',
      comment: 'The Earth laughs in flowers.',
    },
  ],
}

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
