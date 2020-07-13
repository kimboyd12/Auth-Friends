import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';


class FriendsList extends React.Component {
    state = {
        friends: [],
        newFriend: {
            id: Date.now(),
            name: '',
            age: '',
            email: ''
        }
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log({ res });
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log({ err }));
    }

    changeHandler = e => {
        this.setState({
            ...this.state,
            newFriend: {
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('http://localhost:5000/api/friends', this.state.newFriend)
            .then(res => {
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="friends-list">
                <h1>These are my friends!</h1>
                {this.state.friends.map(friend => {
                    return <div className="friend">
                            <h3>{friend.name}</h3>
                            <h3>{friend.age}</h3>
                            <h3>{friend.email}</h3>
                           </div>
                })}

                {/* new friend form */}
                <form onSubmit={this.submitHandler}>
                    <h4>Add a new friend!</h4>
                    <label>
                        Name:
                    <input 
                        type="text"
                        name="name"
                        value={this.state.newFriend.name}
                        onChange={this.changeHandler}
                    />
                    </label>
                    <label>
                        Age:
                    <input 
                        type="text"
                        name="age"
                        value={this.state.newFriend.age}
                        onChange={this.changeHandler}
                    />
                    </label>
                    <label>
                        Email:
                    <input 
                        type="text"
                        name="email"
                        value={this.state.newFriend.email}
                        onChange={this.changeHandler}
                    />
                    </label>
                    <button>Add Friend!</button>
                </form>
            </div>
        )
    }
}

export default FriendsList;