import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showSubmitErrorMsg, setShowSubmitErrorMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate() // To navigate between routes

    useEffect(() => {

        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
            navigate('/')
        }
    }, [navigate])

    const onSubmitSuccess = (jwtToken) => {
        Cookies.set('jwt_token', jwtToken, { expires: 30 })
        navigate('/') // Redirect to the home page after successful login
    }

    const onSubmitFailure = error => {
        setShowSubmitErrorMsg(true)
        setErrorMsg(error)
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
        console.log(data)

        if (response.ok === true) {
            onSubmitSuccess(data.jwt_token) // Call the success handler after login
        } else {
            onSubmitFailure(data.error_msg)
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
                {showSubmitErrorMsg && <p className='error-message'>*{errorMsg}</p>}
            </form>
        </div>
    )
}

export default LoginForm