import React, { Component } from 'react';

import LoaderImage from './loader-image.js';
import './App.css';

import Row from './table-parts/Row.js';
import Cell from './table-parts/Cell.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LoaderImage src="https://wallpaperaccess.com/full/19607.jpg" /> */}
        
        <br />

        <table>
          <tbody>
            <Row>
              <Cell type="" cells="3" background="red">1</Cell>
            </Row>

            <Row>
              <Cell type="date">2</Cell>
              <Cell type="number">3</Cell>
              <Cell type="money" currency="$">4</Cell>
            </Row>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
