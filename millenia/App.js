import React, { Component } from "react";
import "./App.css";
import Music from "./src/components/music";
import Lewks from "./src/components/lewks";
import Section from "./src/components/section";
import PopCulture from "./src/components/pop_culture";
import Films from "./src/components/films";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./src/components/home";
import { SketchTrials } from "./src/components/sketchTrials";

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
