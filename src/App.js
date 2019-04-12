import React, { Component } from 'react';

import LoaderImage from './loader-image.js';
import './App.css';

class App extends Component {
  state = {
    imageSrc: ''
  }

  componentDidMount() {
    const url = 'http://www.4usky.com/data/out/22/164176723-cosmos-wallpapers.jpg';

    fetch(url).then(
      response => response.json()
    ).then(
      data => {
        let imageSrc = data;

        console.log(imageSrc)
      }
    )
  }

  render() {
    return (
      <div className="App">
        <LoaderImage />
      </div>
    );
  }
}

export default App;
