import { Component } from "react";
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import './index.css'


class LoginOrRegisterForm extends Component {
    state = {
        errorMsg: '',
        isLoginActive: false, loginUsername: '',
        loginPassword: '', username: '',
        name: '', password: '',
        location: "", gender: ''
    }

    onSubmitRegisterForm = async (event) => {
        event.preventDefault()
        const { gender, username, name, password, location, } = this.state
        console.log(gender, username, name, password, location,)
        const url = "https://user1-login.onrender.com/register"
        const userDetails = { username, name, gender, password, location }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(userDetails)
        }
        console.log(options)
        console.log(url, options)
        const response = await fetch(url, options)
        console.log(response)
        const data = await response.text()
        console.log(data)
    }

    onUpdateUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    onUpdateName = (event) => {
        this.setState({ name: event.target.value })
    }

    onUpdatePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    onUpdateGender = (event) => {
        this.setState({ gender: event.target.value })
    }

    onUpdateLocation = (event) => {
        this.setState({ location: event.target.value })
    }

    onDisplayLoginForm = () => {
        this.setState({ isLoginActive: true })
    }

    onDisplayRegisterForm = () => {
        this.setState({ isLoginActive: false })
    }

    onChangeLoginUsername = (event) => {
        this.setState({ loginUsername: event.target.value })
    }

    onChangeLoginPassword = (event) => {
        this.setState({ loginPassword: event.target.value })
    }

    onSubmitLoginForm = async (event) => {
        event.preventDefault();
        const { loginUsername, loginPassword } = this.state
        const userDetails = { username: loginUsername, password: loginPassword }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(userDetails)
        }
        const url = "https://user1-login.onrender.com/login"
        const response = await fetch(url, options)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            const { jwtToken } = data
            console.log(jwtToken)
            Cookies.set("sagar_token", jwtToken, { expires: 30 })
            const { history } = this.props
            console.log(history)
            history.replace('/')
        }
        else {
            const data = await response.text()
            this.setState({ errorMsg: data })
        }
    }

    render() {
        const { errorMsg, isLoginActive, loginUsername, loginPassword, username, name, password, location, } = this.state
        const jwtToken = Cookies.get("sagar_token")
        if (jwtToken !== undefined) {
            return <Redirect to="/" />
        }
        console.log(jwtToken)
        return (
            <div className="main-container">
                <div className="login-and-register-container">
                    <div className="buttons-container">
                        <button className={!isLoginActive ? "button login-active" : "button"} onClick={this.onDisplayRegisterForm}>Register</button>
                        <hr />
                        <button className={isLoginActive ? "button login-active" : "button"} onClick={this.onDisplayLoginForm}>Login</button>
                    </div>
                    {isLoginActive ?
                        <div className="login-form-container">
                            <form className="login-form" onSubmit={this.onSubmitLoginForm}>
                                <div className="form-group">

                                    <label>USERNAME</label>
                                    <input placeholder="sagar" value={loginUsername} onChange={this.onChangeLoginUsername} type="text" />
                                </div>
                                <div className="form-group">
                                    <label>PASSWORD</label>
                                    <input placeholder="sagar@babu" value={loginPassword} onChange={this.onChangeLoginPassword} type="password" />
                                </div>
                                <button type="submit">Login</button>
                                {errorMsg && <p className="under-process error">*{errorMsg}</p>}
                            </form>
                        </div> : <div className="login-form-container">
                            <form className="login-form"
                                onSubmit={this.onSubmitRegisterForm}>
                                <div className="form-group">
                                    <label htmlFor="username">USERNAME</label>
                                    <input value={username} onChange={this.onUpdateUsername} id="username" type="text" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">NAME</label>
                                    <input value={name} onChange={this.onUpdateName} id="name" type="text" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">PASSWORD</label>
                                    <input value={password} id="password" onChange={this.onUpdatePassword} type="password" />
                                </div>
                                <div className="form-group-gender">
                                    <p htmlFor="gender">GENDER</p>
                                    <input onChange={this.onUpdateGender} id="male" type="radio" name="gender" value="Male" />
                                    <label htmlFor="male">Male</label>
                                    <input onChange={this.onUpdateGender} id="female" type="radio" name="gender" value="Female" />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">LOCATION</label>
                                    <input value={location} id="location" onChange={this.onUpdateLocation} />
                                </div>
                                <button className="register-button" type="submit">Register</button>
                                <p className="under-process">Register feature is under process !!!!!</p>
                            </form>

                        </div>
                    }
                </div>
            </div >
        )
    }
}

export default LoginOrRegisterForm
