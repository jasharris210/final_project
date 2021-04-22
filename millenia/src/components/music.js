import React, { Component } from "react";
import Article from "./article";

class Music extends Component {
  constructor() {
    super();
    this.state = {
      music: [],
      artID: 0,
      showArticle: false,
      showHome: true,
    };
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    fetch("/api/music")
      .then((res) => res.json())
      .then((music) =>
        this.setState({ music }, () => console.log("music fetched...", music))
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
              <h3>Music</h3>
              <h4>Bops throughout time and their impact</h4>
            </div>
            <div className="articles">
              {this.state.music.map((item) => (
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
            <Article indexOf={this.state.artID} />
          </div>
        )}
      </div>
    );
  }
}

export default Music;
