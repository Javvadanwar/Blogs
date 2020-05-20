import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Paras from "./paras";
import Create from "./create";
function Blog(props) {
  return (
    <Router>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.des}</Card.Text>
            <Link to="/paras">
              <button type="button">View</button>
            </Link>
          </Card.Body>
        </Card>
        <Route exact path="/paras">
          <Paras para={props.par}/>
        </Route>
      </div>
    </Router>
  );
}
export default Blog;
