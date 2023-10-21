import './index.css'

import {Component} from 'react'

import Cookies from 'js-cookie'

import RingLoader from 'react-spinners/RingLoader'

import Header from '../Header'

import ReactSlick from '../Slick'

import PostCard from '../PostCard'

class Home extends Component {
  state = {
    postsData: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getpostsData()
  }

  getpostsData = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/insta-share/posts`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.posts.map(each => ({
        userName: each.user_name,
        userId: each.user_id,
        profilePic: each.profile_pic,
        postId: each.post_id,
        caption: each.post_details.caption,
        imageUrl: each.post_details.image_url,
        createdAt: each.created_at,
        likesCount: each.likes_count,
        comments: each.comments,
      }))
      this.setState({postsData: updatedData, isLoading: false})
    }
  }

  renderPostsView = () => {
    const {postsData} = this.state
    return (
      <ul className="ul-for-posts">
        {postsData.map(each => (
          <PostCard postData={each} key={each.postId} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container-home" data-testid="loader">
      <RingLoader color="#36d7b7" size={40} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-main-container">
        <Header />
        <ReactSlick />
        {isLoading ? this.renderLoadingView() : this.renderPostsView()}
      </div>
    )
  }
}

export default Home
