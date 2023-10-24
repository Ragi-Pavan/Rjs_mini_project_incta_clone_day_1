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

  initaiatePostLike = async (id, status) => {
    const jwtToken = Cookies.get('jwt_token')
    const likedstaus = {
      like_status: status,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(likedstaus),
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const url = `https://apis.ccbp.in/insta-share/posts/${id}/like`
    const response = await fetch(url, options)
    const data = await response.json()
    const {postsData} = this.state
    let userPostsData = postsData
    userPostsData = userPostsData.map(eachObject => {
      if (eachObject.postId === id && status) {
        return {
          ...eachObject,
          message: data.message,
          likesCount: eachObject.likesCount + 1,
        }
      }
      if (eachObject.postId === id && !status) {
        return {
          ...eachObject,
          message: data.message,
          likesCount: eachObject.likesCount - 1,
        }
      }

      return eachObject
    })

    this.setState({
      postsData: userPostsData,
    })
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
    if (postsData.length >= 1) {
      return (
        <div>
          <ReactSlick />
          <ul className="ul-for-posts">
            {postsData.map(each => (
              <PostCard
                postData={each}
                key={each.postId}
                ClikedOnLikeOrUnlike={this.initaiatePostLike}
              />
            ))}
          </ul>
        </div>
      )
    }
    return this.searchNotFoundView()
  }

  searchNotFoundView = () => (
    <div className="search-not-found">
      <div>
        <img
          className="no-search-image"
          src="https://res.cloudinary.com/dytgpb4j5/image/upload/v1698138001/ja8hdtuomztjfuyqxmgw.jpg"
          alt="no-search-found"
        />
        <div>
          <h1 className="heeed">Search Not Found</h1>
          <p className="papi">Try different keyword or search again</p>
        </div>
      </div>
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container-home" data-testid="loader">
      <RingLoader color="#36d7b7" size={40} />
    </div>
  )

  updateSearchResult = async value => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/insta-share/posts?search=${value}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const NewData = data.posts.map(each => ({
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
      this.setState({postsData: NewData, isLoading: false})
    }
  }

  renderFailureView = () => (
    <div className="failure-container">
      <div>
        <img
          className="eoorr-image"
          src="https://res.cloudinary.com/dytgpb4j5/image/upload/v1698141049/rqosmibopf2zr2mpi374.jpg"
          alt="error"
        />
      </div>
      <p className="err-msg-server">Something went wrong. Please try again</p>
      <button type="button" className="retryButton">
        Try Again
      </button>
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-main-container">
        <Header searchedforResult={this.updateSearchResult} />
        {isLoading ? this.renderLoadingView() : this.renderPostsView()}
      </div>
    )
  }
}

export default Home
