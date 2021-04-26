import React, { Component } from "react";
import "./App.css";
import Music from "./components/music";
import Lewks from "./components/lewks";
import Section from "./components/section";
import PopCulture from "./components/pop_culture";
import Films from "./components/films";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/home";
import { SketchTrials } from "./components/sketchTrials";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Section>
            <Switch>
              <Route path="/music">
                <Music />
              </Route>

              <Route path="/lewks">
                <Lewks />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/films">
                <Films />
              </Route>

              <Route path="/pop_culture">
                <PopCulture />
              </Route>
            </Switch>
          </Section>
        </Router>
        {/* <SketchTrials /> */}
      </div>
    );
  }
}

export default App;
