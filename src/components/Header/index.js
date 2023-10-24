import './index.css'
import {Component} from 'react'

import Cookies from 'js-cookie'

import {Link, withRouter} from 'react-router-dom'

import {BiMenu} from 'react-icons/bi'

import {TiDeleteOutline} from 'react-icons/ti'

import {BsSearch} from 'react-icons/bs'

class Header extends Component {
  state = {
    showHumberMenu: false,
    showSearchBar: false,
    searchInput: '',
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

  clikedonCloseSearch = () => {
    this.setState({
      showSearchBar: false,
    })
  }

  clickOnSearch = () => {
    this.setState({
      showSearchBar: true,
      showHumberMenu: false,
    })
  }

  changeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  clikedonSearchIcon = () => {
    const {searchedforResult} = this.props
    const {searchInput} = this.state
    searchedforResult(searchInput)
  }

  clikedonLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {showHumberMenu, showSearchBar, searchInput} = this.state
    return (
      <div className="heade-container">
        <div className="heder-for-small">
          <div className="header-for-small-devices">
            <div className="icon-cont">
              <Link to="/" className="link">
                <img
                  className="icon-in-header"
                  src="https://res.cloudinary.com/dytgpb4j5/image/upload/v1697451367/logo_zyucph.jpg"
                  alt="icon"
                />
              </Link>

              <h1 className="heading">Insta Share</h1>
            </div>
            <div className="humberber-container">
              <p className="humber-button" onClick={this.clikedOnHumberberg}>
                <BiMenu />
              </p>
            </div>
          </div>

          {showSearchBar && (
            <div className="search-Out">
              <div className="search-container-for-small">
                <input
                  type="search"
                  className="input-search"
                  placeholder="Search Caption"
                  onChange={this.changeSearchInput}
                  value={searchInput}
                />
                <p className="search-icon" onClick={this.clikedonSearchIcon}>
                  <BsSearch />
                </p>
              </div>
              <button
                type="button"
                className="button-for-search-close"
                onClick={this.clikedonCloseSearch}
              >
                <TiDeleteOutline />
              </button>
            </div>
          )}

          {showHumberMenu && (
            <div className="humberger-menu">
              <ul className="ul">
                <Link to="/" className="link">
                  <li className="list-for-header" key="home">
                    <button
                      type="button"
                      className="buttons"
                      onClick={this.clikedOnCloseHumberberg}
                    >
                      Home
                    </button>
                  </li>
                </Link>
                <Link to="/my-profile" className="link">
                  <li className="list-for-header" key="profile">
                    <button
                      type="button"
                      className="buttons"
                      onClick={this.clikedOnCloseHumberberg}
                    >
                      Profile
                    </button>
                  </li>
                </Link>
                <li
                  className="list-for-header"
                  onClick={this.clickOnSearch}
                  key="search"
                >
                  Search
                </li>
              </ul>
              <button
                type="button"
                className="log-button"
                onClick={this.clikedonLogout}
              >
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
        <div className="larger-two">
          <div className="header-for-larger-devices">
            <div className="larger-icon-container">
              <Link to="/" className="link">
                <img
                  className="icon-in-header"
                  src="https://res.cloudinary.com/dytgpb4j5/image/upload/v1697451367/logo_zyucph.jpg"
                  alt="icon"
                />
              </Link>
              <h1 className="heading">Insta Share</h1>
            </div>
            <div className="Search-and-logout-container">
              <div className="search-container">
                <input
                  type="search"
                  className="input-search"
                  placeholder="Search Caption"
                  onChange={this.changeSearchInput}
                  value={searchInput}
                />
                <p className="search-icon" onClick={this.clikedonSearchIcon}>
                  <BsSearch />
                </p>
              </div>
              <button type="button" className="buttun">
                Home
              </button>
              <Link to="/my-profile">
                <button type="button" className="buttun">
                  Profile
                </button>
              </Link>

              <button
                type="button"
                className="log-button"
                onClick={this.clikedonLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
