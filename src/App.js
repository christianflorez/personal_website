import React, { Component } from 'react';
import Navigation from './Navigation';
import IntroJumbo from './IntroJumbo';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation title="Christian Florez" />
          <IntroJumbo />
          <Portfolio />
      </div>
    );
  }
}

export default App;
