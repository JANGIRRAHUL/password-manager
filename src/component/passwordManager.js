import {Component} from 'react'

import './passwordManager.css'

const passwordList = [
  {
    id: 1,
    website: 'youtube.com',
    username: 'jangirrahul',
    password: 'rahul123',
  },
]

const YourPassword = props => {
  const {userDetails} = props
  const {website, username, password} = userDetails
  const firstLetter = username[0]
  return (
    <li className="list-item">
      <p className="avatar">{firstLetter}</p>
      <div className="text-container">
        <p className="paragraph">{website}</p>
        <p className="paragraph">{username}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
          alt="stars"
          className="star-image"
        />
        <button type="button" className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

class Password extends Component {
  render() {
    return (
      <div className="page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="new-password-container">
          <form className="form-container">
            <p className="heading">Add New Password</p>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="image"
              />
              <input placeholder="Enter Website" className="input-element" />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="image"
              />
              <input placeholder="Enter Username" className="input-element" />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="image"
              />
              <input placeholder="Enter Password" className="input-element" />
            </div>
            <div className="button-container">
              <button type="submit" className="button">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="manager-image"
          />
        </div>
        <div className="bottom-password-manager">
          <div className="bottom-top-container">
            <p className="your-password">
              Your Passwords <span className="span-element">0</span>
            </p>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="image"
              />
              <input placeholder="Enter Password" className="input-element" />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-container">
            <input id="checkbox" type="checkbox" className="checkbox-input" />
            <label htmlFor="checkbox" className="show-password">
              Show Passwords
            </label>
          </div>
          <div className="password-container">
            <ul>
              {passwordList.map(eachUser => (
                <YourPassword userDetails={eachUser} key={eachUser.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Password
