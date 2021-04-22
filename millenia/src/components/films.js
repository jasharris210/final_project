import React, { Component } from "react";
import ArticleFilm from "./article_film";

class Films extends Component {
  constructor() {
    super();
    this.state = {
      moovies: [],
      artID: 0,
      showArticle: false,
      showHome: true,
    };
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    fetch("/api/moovies")
      .then((res) => res.json())
      .then((moovies) =>
        this.setState({ moovies }, () =>
          console.log("moovies fetched...", moovies)
        )
      );
  }

  clickArticle(id) {
    this.setState({ showArticle: true, showHome: false, artID: id });
  }

  goBack() {
    this.setState({ showArticle: false, showHome: true });
  }

  render() {
    return (
      <div>
        {this.state.showHome ? (
          <div>
            <div className="statement">
              <h3>Moovies</h3>
              <h4>
                Legendary films that impacted society and changed the game.
              </h4>
            </div>
            <div className="articles">
              {this.state.moovies.map((item) => (
                <div className="article_home_box">
                  <button>
                    <img
                      className="articles_img"
                      src={item.img}
                      onClick={() => this.clickArticle(item.id)}
                    />
                  </button>
                  <h4 className="article_home_title">{item.title}</h4>
                  <p className="article_home_descr">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <button className="go-back-button" onClick={this.goBack}>
              GO BACK
            </button>
            <ArticleFilm indexOf={this.state.artID} />
          </div>
        )}
      </div>
    );
  }
}

export default Films;
