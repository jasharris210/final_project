import React, { Component } from "react";
import "./article.css";

class ArticlePop extends Component {
  constructor() {
    super();
    this.state = {
      popCulture: [],
    };
  }

  componentDidMount() {
    fetch("/api/popCulture")
      .then((res) => res.json())
      .then((popCulture) =>
        this.setState({ popCulture }, () =>
          console.log("popCulture fetched...", popCulture)
        )
      );
  }

  render() {
    return (
      <div>
        {this.state.popCulture
          .filter((index) => index.id == this.props.indexOf)
          .map((item) => (
            <li key="1">
              <div className="article_format">
                <h3 className="article_title_format">{item.title}</h3>
                <h4 className="article_descr_format">{item.date}</h4>
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

export default ArticlePop;
