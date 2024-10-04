import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './index.css'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate() // To navigate between routes

  const onSubmitSuccess = () => {
    navigate('/') // Redirect to the home page after successful login
  }

  const submitForm = async (event) => {
    event.preventDefault()
    const userDetails = { username, password }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)

    if (response.ok === true) {
      onSubmitSuccess() // Call the success handler after login
    }
  }

  const onChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-filed"
        value={password}
        onChange={onChangePassword}
      />
    </>
  )

  const renderUsernameField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="username-input-filed"
        value={username}
        onChange={onChangeUsername}
      />
    </>
  )

  return (
    <div className="login-form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="login-website-logo-mobile-image"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        className="login-image"
        alt="website login"
      />
      <form className="form-container" onSubmit={submitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-desktop-image"
          alt="website logo"
        />
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm


// import {Component} from 'react'
// // import{withRouter} from 'react-router-dom'

// import './index.css'

// class LoginForm extends Component {
//   state = {
//     username: '',
//     password: '',
//   }

//   onSubmitSuccess = () => {
//     const {navigate} = this.props
//     navigate('/')
//   }

//   submitForm =async (event) =>{
//     event.preventDefault()
//     const {username, password} = this.state
//     const userDetails = {username, password}

//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//         method : 'POST',
//         body : JSON.stringify(userDetails)
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     console.log(response)
//     if(response.ok === true){
//         this.onSubmitSuccess()
//     }
//   }

//   onChangeUsername = event => {
//     this.setState({username: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({password: event.target.value})
//   }

//   renderPasswordField = () => {
//     const {password} = this.state
//     return (
//       <>
//         <label className="input-label" htmlFor="password">
//           PASSWORD
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="password-input-filed"
//           value={password}
//           onChange={this.onChangePassword}
//         />
//       </>
//     )
//   }

//   renderUsernameField = () => {
//     const {username} = this.state
//     return (
//       <>
//         <label className="input-label" htmlFor="username">
//           USERNAME
//         </label>
//         <input
//           type="text"
//           id="username"
//           className="username-input-filed"
//           value={username}
//           onChange={this.onChangeUsername}
//         />
//       </>
//     )
//   }

//   render() {
//     return (
//       <div className="login-form-container">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//           className="login-website-logo-mobile-image"
//           alt="website logo"
//         />
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
//           className="login-image"
//           alt="website login"
//         />
//         <form className="form-container" onSubmit={this.submitForm}>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//             className="login-website-logo-desktop-image"
//             alt="website logo"
//           />
//           <div className="input-container">{this.renderUsernameField()}</div>
//           <div className="input-container">{this.renderPasswordField()}</div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>
//       </div>
//     )
//   }
// }

// export default LoginForm