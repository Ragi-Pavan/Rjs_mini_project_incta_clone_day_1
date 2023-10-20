import './index.css'

import {Component} from 'react'

import Header from '../Header'

import ReactSlick from '../Slick'

class Home extends Component {
  render() {
    return (
      <div className="home-main-container">
        <Header />
        <ReactSlick />
      </div>
    )
  }
}

export default Home
