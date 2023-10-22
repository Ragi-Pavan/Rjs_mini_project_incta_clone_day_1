import './index.css'

import {Component} from 'react'

import Cookies from 'js-cookie'

import Header from '../Header'

const RawData = {
  followers_count: 297,
  following_count: 303,
  id: 'df3234jkjn2-32432nnknn-w23231',
  posts: [
    {
      id: '390562f5-298f-4904-aea4-07ecc212febe',
      image:
        'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-10-img.png',
    },
    {
      id: '65fba963-c699-48f7-afaa-c436ca950486',
      image:
        'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-13-img.png',
    },
    {
      id: '902dac7d-c94f-4f8f-bbe3-bbe123f487c1',
      image:
        'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-16-img.png',
    },
  ],
  posts_count: 3,
  profile_pic:
    'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-4-img.png',
  user_bio:
    'Prabuddha Dasgupta (21 September 1956 – 12 August 2012) was an Indian fashion and fine-art photographer. ',
  user_id: 'Prabuddha_Dasgupta',
  user_name: 'Prabuddha Dasgupta',
  stories: [
    {
      id: 'UnrObltRP',
      image:
        'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/previous-stories/instagram-mini-project-previous-story-10-img.png',
    },
    {
      id: '33kY86sdt',
      image:
        'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/previous-stories/instagram-mini-project-previous-story-11-img.png',
    },
    {
      id: 'FHswGFFeo',
      image:
        'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/previous-stories/instagram-mini-project-previous-story-12-img.png',
    },
  ],
}

class UserProfile extends Component {
  componentDidMount() {
    this.getUserProfileData()
  }

  getUserProfileData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/insta-share/users/Prabuddha_Dasgupta`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="user-profile-main-container">
        <Header />
      </div>
    )
  }
}

export default UserProfile
