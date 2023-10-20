import './index.css'
import {Component} from 'react'

import {BiMenu} from 'react-icons/bi'

import {TiDeleteOutline} from 'react-icons/ti'

import {BsSearch} from 'react-icons/bs'

const Humbergermenudetails = [
  {
    id: 'HOME',
    displaytext: 'Home',
    link: '/',
  },
  {
    id: 'SEARCH',
    displaytext: 'Search',
    link: '/Search',
  },
  {
    id: 'PROFILE',
    displaytext: 'Profile',
    link: '/Profile',
  },
]

class Header extends Component {
  state = {
    showHumberMenu: false,
  }

  clikedOnHumberberg = () => {
    this.setState({
      showHumberMenu: true,
    })
  }

  clikedOnCloseHumberberg = () => {
    this.setState({
      showHumberMenu: false,
    })
  }

  render() {
    const {showHumberMenu} = this.state
    return (
      <div className="heade-container">
        <div className="heder-for-small">
          <div className="header-for-small-devices">
            <div className="icon-cont">
              <img
                className="icon-in-header"
                src="https://res.cloudinary.com/dytgpb4j5/image/upload/v1697451367/logo_zyucph.jpg"
                alt="icon"
              />
              <h1 className="heading">Insta Share</h1>
            </div>
            <div className="humberber-container">
              <p className="humber-button" onClick={this.clikedOnHumberberg}>
                <BiMenu />
              </p>
            </div>
          </div>

          {showHumberMenu && (
            <div className="humberger-menu">
              <ul className="ul">
                {Humbergermenudetails.map(each => (
                  <li key={each.id} className="list-item">
                    {each.displaytext}
                  </li>
                ))}
              </ul>
              <button type="button" className="log-button">
                Logout
              </button>
              <button
                type="button"
                className="wrong-button"
                onClick={this.clikedOnCloseHumberberg}
              >
                <TiDeleteOutline />
              </button>
            </div>
          )}
        </div>
        <div className="header-for-larger-devices">
          <div className="larger-icon-container">
            <img
              className="icon-in-header"
              src="https://res.cloudinary.com/dytgpb4j5/image/upload/v1697451367/logo_zyucph.jpg"
              alt="icon"
            />
            <h1 className="heading">Insta Share</h1>
          </div>
          <div className="Search-and-logout-container">
            <div className="search-container">
              <input
                type="search"
                className="input-search"
                placeholder="Search Caption"
              />
              <p className="search-icon">
                <BsSearch />
              </p>
            </div>
            <button type="button" className="buttun">
              Home
            </button>
            <button type="button" className="buttun">
              Profile
            </button>
            <button type="button" className="log-button">
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
