import { Component } from "react";

import './index.css'

class LoginOrRegisterForm extends Component {
    state = { isLoginActive: false, username: '', name: '', password: '', location: "", gender: '' }

    onSubmitRegisterForm = async (event) => {
        event.preventDefault()
        const { gender, username, name, password, location, } = this.state
        console.log(gender, username, name, password, location,)
        const url = "https://srb-user-data.onrender.com/register"
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

    render() {
        const { isLoginActive, username, name, password, location, } = this.state
        return (

            <div className="main-container">
                <div className="login-and-register-container">
                    <div className="buttons-container">
                        <button className="button" onClick={this.onDisplayRegisterForm}>Register</button>
                        <hr />
                        <button className="button" onClick={this.onDisplayLoginForm}>Login</button>
                    </div>
                    {isLoginActive ?
                        <div>
                            <form>
                                <div>
                                    <label>USERNAME</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>PASSWORD</label>
                                    <input type="password" />
                                </div>
                                <button type="submit">Login</button>
                            </form>
                        </div> : <div>
                            <form onSubmit={this.onSubmitRegisterForm}>
                                <div>
                                    <label htmlFor="username">USERNAME</label>
                                    <input value={username} onChange={this.onUpdateUsername} id="username" type="text" />
                                </div>
                                <div>
                                    <label htmlFor="name">NAME</label>
                                    <input value={name} onChange={this.onUpdateName} id="name" type="text" />
                                </div>
                                <div>
                                    <label htmlFor="password">PASSWORD</label>
                                    <input value={password} id="password" onChange={this.onUpdatePassword} type="password" />
                                </div>
                                <div>
                                    <p htmlFor="gender">GENDER</p>
                                    <input onChange={this.onUpdateGender} id="male" type="radio" name="gender" value="Male" />
                                    <label htmlFor="male">Male</label>
                                    <input onChange={this.onUpdateGender} id="female" type="radio" name="gender" value="Female" />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div>
                                    <label htmlFor="location">LOCATION</label>
                                    <input value={location} id="location" onChange={this.onUpdateLocation} />
                                </div>
                                <button type="submit">Register</button>
                                <p>Error Message</p>
                            </form>
                        </div>
                    }
                </div>
            </div >
        )
    }
}

export default LoginOrRegisterForm