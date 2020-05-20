import React from "react";
import Blog from "./blog";
function Blogss(props) {
  let arr = [];
  for (let i = 0; i < props.AllBlogs.length; i++) {
    arr.push(
      <Blog
        title={props.AllBlogs[i].title}
        des={props.AllBlogs[i].des}
        par={props.AllBlogs[i].paras}
      />
    );
  }
  return <div>{arr}</div>;
}
export default Blogss;
