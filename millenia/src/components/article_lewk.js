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
        {this.state.lewks
          .filter((index) => index.id == this.props.indexOf)
          .map((item) => (
            <li key="1">
              <div className="article_format">
                <h3 className="article_title_format">{item.title}</h3>
                <h4 className="article_descr_format">{item.date}</h4>
                <h4 className="article_descr_format">{item.quote}</h4>
              </div>

              <img className="article_item_img" src={item.img} />
              <p className="music_article-format">{item.art}</p>
            </li>
          ))}
      </div>
    );
  }
}

{
}

export default ArticleLewk;
