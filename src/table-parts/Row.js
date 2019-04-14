import React, { Component } from 'react';
import Cell from './Cell.js';

const Row = ({head, textValue, children}) => (
  <tr>
    {
      children !== undefined ? children : (<td>{textValue}</td>)
    }
  </tr>
)

Row.defaultProps = {
  head: false,
  textValue: '=('
}

export default Row;