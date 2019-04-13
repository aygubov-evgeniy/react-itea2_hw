import React, { Component } from 'react';

import LoaderImage from './loader-image.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoaderImage src="https://wallpaperaccess.com/full/19607.jpg" />
      </div>
    );
  }
}

export default App;
