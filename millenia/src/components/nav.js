import React, { Component } from "react";
import "./article.css";

class NavBar extends Component {
  render() {
    return (
      <div className="nav_bar">
        <ul id="nav">
          <li>
            <a style={{ color: "#98BA6D" }} href="/music">
              Music
            </a>
          </li>
          <li>
            <a style={{ color: "#BA906D" }} href="/lewks">
              Lewks
            </a>
          </li>
          <div className="nav_title">
            <a className="nav_home" href="/">
              Millenia's Universe
            </a>
            <img className="giphy_nav" src="./images/giphy.gif" />
          </div>
          <li>
            <a style={{ color: "#8379c3" }} href="/films">
              Moovies
            </a>
          </li>
          <li>
            <a style={{ color: "#ef9bce" }} href="/pop_culture">
              Pop Culture
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
