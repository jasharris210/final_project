import React, { Component } from "react";
import ArticleLewk from "./article_lewk";

class Lewks extends Component {
  constructor() {
    super();
    this.state = {
      lewks: [],
      artID: 0,
      showArticle: false,
      showHome: true,
    };
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    fetch("/api/lewks")
      .then((res) => res.json())
      .then((lewks) =>
        this.setState({ lewks }, () => console.log("lewks fetched...", lewks))
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
              <h3>Lewks</h3>
              <h4>Iconic Lewks throught the decade</h4>
            </div>
            <div className="articles">
              {this.state.lewks.map((item) => (
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
            <ArticleLewk indexOf={this.state.artID} />
          </div>
        )}
      </div>
    );
  }
}

export default Lewks;
