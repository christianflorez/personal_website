import React, { Component } from "react";
import Navigation from "./Navigation";
import IntroJumbo from "./IntroJumbo";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation title="Christian Florez" />
        <IntroJumbo />
        <Portfolio />
        <Skills />
        <AboutMe />
        <Contact />
      </div>
    );
  }
}

export default App;
