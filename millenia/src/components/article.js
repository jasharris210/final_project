import React, { Component } from "react";
import "./article.css";

class Article extends Component {
  constructor() {
    super();
    this.state = {
      music: [],
    };
  }

  componentDidMount() {
    fetch("/api/music")
      .then((res) => res.json())
      .then((music) =>
        this.setState({ music }, () => console.log("music fetched...", music))
      );
  }

  render() {
    return (
      <div>
        {this.state.music
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

export default Article;
