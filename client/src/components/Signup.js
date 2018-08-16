import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';


class Signup extends React.Component  {

  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state)
  }



  render() {
    return(
      <Container>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right" onChange={this.handleChange} name="username"/>
                <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" onChange={this.handleChange} name="email" />
                <Input label="Your password" icon="lock" group type="password"  onChange={this.handleChange} validate name="password"/>
                <Input label="Confirm your password" icon="exclamation-triangle" group type="password" validate error="wrong" success="right" onChange={this.handleChange} name="password_confirmation" />

              </div>
              <div className="text-center">
                <Button type="submit" color="primary">Register</Button>
              </div>
            </form>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
    );
  }
};

export default Signup;
