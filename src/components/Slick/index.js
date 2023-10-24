import {Component} from 'react'

import Cookies from 'js-cookie'

import Slider from 'react-slick'

import RingLoader from 'react-spinners/RingLoader'

/* Add css to your project */
import './index.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
  ],
}

class ReactSlick extends Component {
  state = {
    storiesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getStoriesData()
  }

  getStoriesData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/insta-share/stories`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.users_stories.map(each => ({
        storyUrl: each.story_url,
        userId: each.user_id,
        userName: each.user_name,
      }))
      this.setState({
        storiesList: updatedData,
        isLoading: false,
      })
    }
  }

  renderSlider = () => {
    const {storiesList} = this.state
    return (
      <Slider {...settings}>
        {storiesList.map(eachLogo => {
          const {userId, storyUrl, userName} = eachLogo
          return (
            <div className="slider_item" key={userId}>
              <div className="slick-item">
                <div>
                  <img className="logo-image" src={storyUrl} alt="user story" />
                </div>
                <p className="name">{userName}</p>
              </div>
            </div>
          )
        })}
      </Slider>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <RingLoader color="#36d7b7" size={40} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div>
        <div className="main-container">
          <div className="slick-container">
            {isLoading ? this.renderLoadingView() : this.renderSlider()}
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default ReactSlick
