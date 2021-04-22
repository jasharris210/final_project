import React, { Component } from "react";
import ArticlePop from "./article_pop";

class PopCulture extends Component {
  constructor() {
    super();
    this.state = {
      popCulture: [],
      artID: 0,
      showArticle: false,
      showHome: true,
    };
    this.goBack = this.goBack.bind(this);
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
              <h3>Pop Culture</h3>
              <h4>
                Defining moments in pop culture history that celebrities have
                given us.
              </h4>
            </div>
            <div className="articles">
              {this.state.popCulture.map((item) => (
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
            <ArticlePop indexOf={this.state.artID} />
          </div>
        )}
      </div>
    );
  }
}

export default PopCulture;
