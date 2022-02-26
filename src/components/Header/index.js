import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
// import HomePosts from '../HomePosts'
import './index.css'

class Header extends Component {
  state = {
    searchInput: '',
  }

  componentDidMount() {
    this.getSearchResult()
  }

  onSearch = () => {}

  onLogoutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <nav className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dfww8i8em/image/upload/v1645334921/Standard_Collection_8_xv8lnb.png"
              alt="website logo"
              className="logo"
            />
          </Link>
          <h1 className="logo-name">Insta Share</h1>
        </div>
        <ul className="nav-links">
          <div className="search-container">
            <input
              type="search"
              className="search-box"
              onChange={this.onChangeSearch}
              value={searchInput}
            />
            <button
              type="button"
              className="search-btn"
              onClick={this.onSearch}
            >
              <FaSearch className="search-icon" />
            </button>
          </div>
          <Link to="/" className="home">
            <li className="home">Home</li>
          </Link>
          <Link to="/my-profile">
            <li className="my-profile">Profile</li>
          </Link>
          <button
            type="button"
            className="logout-btn"
            onClick={this.onLogoutBtn}
          >
            Logout
          </button>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Header)
