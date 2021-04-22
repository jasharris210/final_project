import React, { Component } from "react";
import "./article.css";

class ArticleFilm extends Component {
  constructor() {
    super();
    this.state = {
      moovies: [],
    };
  }

  componentDidMount() {
    fetch("/api/moovies")
      .then((res) => res.json())
      .then((moovies) =>
        this.setState({ moovies }, () =>
          console.log("lewks fetched...", moovies)
        )
      );
  }

  render() {
    return (
      <div>
        {this.state.moovies
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

export default ArticleFilm;
