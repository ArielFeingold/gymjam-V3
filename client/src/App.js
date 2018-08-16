import React, { Component } from 'react';
import CreateUser from './containers/CreateUser'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {
  render() {
    return (
      <CreateUser />
    );
  }
}

export default App;
