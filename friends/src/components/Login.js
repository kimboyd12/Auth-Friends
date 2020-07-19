import React from 'react';
import axios from 'axios';


class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    changeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();

        // POST request to endpoint on the server
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                // redirect to friends list page
                this.props.history.push("/friends");
            })
            .catch(err => console.log({ err }));
    }

    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.changeHandler}
                        placeholder="Username"
                    />
                    <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.changeHandler}
                        placeholder="Password"
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;