import './index.css'

import {Component} from 'react'

import Cookies from 'js-cookie'

import RingLoader from 'react-spinners/RingLoader'

import {BsGrid3X3} from 'react-icons/bs'

import Header from '../Header'

class MyProfile extends Component {
  state = {
    userData: {},
    isloading: true,
  }

  componentDidMount() {
    this.getUserProfileData()
  }

  getUserProfileData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/insta-share/my-profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const UpdatedData = {
        followersCount: data.profile.followers_count,
        followingCount: data.profile.following_count,
        id: data.profile.id,
        posts: data.profile.posts,
        postsCount: data.profile.posts_count,
        profilePic: data.profile.profile_pic,
        stories: data.profile.stories,
        userBio: data.profile.user_bio,
        userId: data.profile.user_id,
        userName: data.profile.user_name,
      }
      this.setState({userData: UpdatedData, isloading: false})
    }
  }

  renderprofile = () => {
    const {userData} = this.state
    const {
      followersCount,
      followingCount,
      id,
      posts,
      postsCount,
      profilePic,
      stories,
      userBio,
      userId,
      userName,
    } = userData
    return (
      <div className="main-for-profile-user">
        <div className="container-for-overall">
          <div className="profle-container">
            <p className="nameforuser">{userName}</p>
            <div className="profile-for-user-specific">
              <img className="profile-for-user" src={profilePic} alt={id} />
              <div className="posts-info-container">
                <p className="posts-count">{userData.postsCount}</p>
                <p className="posta">posts</p>
              </div>
              <div className="posts-info-container">
                <p className="posts-count">{followersCount}</p>
                <p className="posta">followers</p>
              </div>
              <div className="posts-info-container">
                <p className="posts-count">{followingCount}</p>
                <p className="posta">following</p>
              </div>
            </div>
            <div>
              <p className="user-id">{userId}</p>
              <p className="user-bio">{userBio}</p>
            </div>
          </div>

          <div className="profile-container-for-lg">
            <div>
              <img className="profile-for-user" src={profilePic} alt={userId} />
            </div>
            <div className="clear-info-for-lg">
              <p className="nameforuser">{userName}</p>
              <div className="ínfo-for-lg">
                <div className="posts-info-container">
                  <p className="posts-count">{postsCount}</p>
                  <p className="posta">posts</p>
                </div>
                <div className="posts-info-container">
                  <p className="posts-count">{followersCount}</p>
                  <p className="posta">followers</p>
                </div>
                <div className="posts-info-container">
                  <p className="posts-count">{followingCount}</p>
                  <p className="posta">following</p>
                </div>
              </div>

              <div>
                <p className="user-id">{userId}</p>
                <p className="user-bio">{userBio}</p>
              </div>
            </div>
          </div>

          <div className="stories-container">
            <ul className="ul-for-story">
              {stories.map(each => (
                <li key={each.id} className="list-item-for-story">
                  <img className="story-img" src={each.image} alt={each.id} />
                </li>
              ))}
            </ul>
          </div>
          <hr className="hori" />
          <div className="posts-container">
            <div className="grids">
              <BsGrid3X3 className="grid" />
              <p className="posts-para">Posts</p>
            </div>
            <div>
              <ul className="ul-for-post">
                {posts.map(each => (
                  <li className="list-for-post" key={each.id}>
                    <img
                      className="image-for-post"
                      src={each.image}
                      alt={each.id}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container-home" data-testid="loader">
      <RingLoader color="#36d7b7" size={40} />
    </div>
  )

  render() {
    const {isloading} = this.state
    return (
      <div className="user-profile-main-container">
        <Header />
        {isloading ? this.renderLoader() : this.renderprofile()}
      </div>
    )
  }
}

export default MyProfile
