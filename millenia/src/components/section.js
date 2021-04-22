import React, { Component } from "react";
import NavBar from "./nav";

export class Section extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Section;
