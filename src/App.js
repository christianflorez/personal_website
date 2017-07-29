import React, { Component } from 'react';
import Navigation from './Navigation';
import IntroJumbo from './IntroJumbo';
import Portfolio from './Portfolio';
import Skills from './Skills';
import AboutMe from './AboutMe';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation title="Christian Florez" />
          <IntroJumbo />
          <Portfolio />
          <Skills />
          <AboutMe />
      </div>
    );
  }
}

export default App;
