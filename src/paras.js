import React from "react";
import Blog from "./blog";
import { Card } from "react-bootstrap";
class Paras extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <p>{this.props.para}</p>
      </div>
    );
  }
}
export default Paras;
