import React from 'react';
import Signup from '../components/Signup'

class CreateUser extends React.Component {

  createUser = user => {

    let url = `http://localhost:3001/api/users?`
    let data = {
      username: user.username,
      password: user.password,
      password_confirmation: user.password_confirmation,
      email: user.email
    }
    // Default options are marked with *
  return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  .then(response => response.json())
  .then(data => console.log("here", data))// parses response to JSON
  }

  render() {
    return(
      <Signup onSubmit={this.createUser} />
    )
  }
}

export default CreateUser;
