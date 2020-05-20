import React from "react";
import { Button, Form } from "react-bootstrap";
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      SignInPassword: "",
    };
  }
  onEmailChange = (event) => {
    event.preventDefault();
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    event.preventDefault();
    this.setState({ SignInPassword: event.target.value });
  };
  onSubmitSignin = () => {
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.SignInPassword,
      }),
    })
    this.props.onRouteChange("home");
  };
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={this.onEmailChange}
            value={this.state.signInEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.onPasswordChange}
            value={this.state.SignInPassword}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.onSubmitSignin}>
          Sign in
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={() => this.props.onRouteChange("register")}
        >
          Register
        </Button>
      </Form>
    );
  }
}
export default Signin;
