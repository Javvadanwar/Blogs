import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Button,
  Nav,
  Form,
  Navbar,
  Card,
  FormControl,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./create";
import Blogss from "./blogss";
import Signin from "./Signin";
import Register from "./Register";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      AllBlogs: [],
      route: "signin",
    };
  }
  componentDidMount() {
    fetch("http://localhost:3002/Blogs")
      .then((res) => res.json())
      .then((data) => this.setState({ AllBlogs: data }));
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  render() {
    const add = (blog) => {
      fetch("http://localhost:3002/Blogs", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      })
        .then((res) => res.json())
        .then((blog) => {
          this.setState({ AllBlogs: this.state.AllBlogs.concat(blog) });
        });
    };
    return (
      <Router>
        <Container>
          <div>
            {this.state.route === "home" ? (
               <div>
               <nav>
                 <Navbar bg="light" expand="lg">
                   <Navbar.Brand>
                     <Link to="/">Blogs</Link>
                   </Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto">
                       <Nav.Link>
                         <Link to="/create">Create New Blog</Link>
                       </Nav.Link>
                     </Nav>
                     <Button
                       variant="primary"
                       type="submit"
                       onClick={() => this.onRouteChange("signin")}
                     >
                       Sign Out
                     </Button>
                   </Navbar.Collapse>
                 </Navbar>
               </nav>

               <Switch>
                 <Route exact path="/create">
                   <Create add={add} />
                 </Route>
                 <Route path="/">
                   <Blogss AllBlogs={this.state.AllBlogs} />
                 </Route>
               </Switch>
             </div>
             
            ) : (
              this.state.route==="signin"
              ?
              <Signin onRouteChange={this.onRouteChange} />
              :
              <Register onRouteChange={this.onRouteChange}/>
            )}
          </div>
        </Container>
      </Router>
    );
  }
}
export default App;
