import React from 'react';
import Signup from '../components/Signup'

class CreateUser extends React.Component {
  state = {
    data: []
  }


  createUser = user => {
    let url = `http://localhost:3001/api/users?username=${user.username}&password=${user.password}&password_confirmation=${user.password_confirmation}&email=${user.email}`

    fetch(url, {
      method: "POST"
    })
    .then(data => console.log(data)) // JSON from `response.json()` call
    .catch(error => console.error(error))
  }


  render() {
    return(
      <Signup onSubmit={this.createUser} />
    )
  }
}

export default CreateUser;
