import React, { Component } from "react";
import "./article.css";

class ArticleLewk extends Component {
  constructor() {
    super();
    this.state = {
      lewks: [],
    };
  }

  componentDidMount() {
    fetch("/api/lewks")
      .then((res) => res.json())
      .then((lewks) =>
        this.setState({ lewks }, () => console.log("lewks fetched...", lewks))
      );
  }

  render() {
    return (
      <div>
        {this.state.lewks.map((item) => (
          <li key="1">
            <div>
              <h3>{item.title}</h3>
              <h4>{item.date}</h4>
              <h4>{item.quote}</h4>
            </div>

            <img src={item.img} />
            <p>{item.art}</p>
          </li>
        ))}
      </div>
    );
  }
}

{
}

export default ArticleLewk;
