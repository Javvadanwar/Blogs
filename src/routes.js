import React from "react";
import BasicExample from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Button,
  Card,
  Navbar,
  Form,
  Nav,
  FormControl,
  Container,
} from "react-bootstrap";
import "./App.css";
import Create from "./create";
import App from "./App";
class route extends React.Component{
  render()
  {
    return(
      <Router>
<Route path={"/"} component={App}>
  <Route path={"/create"} component={Create}/>
  </Route>

      </Router>
    )
  }
}