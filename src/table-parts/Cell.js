import React, { Component } from 'react';

const Cell = ({cells, color, background, type, currency, children}) => {
  const style = {
    color: color,
    background: background,
    fontStyle: type === 'date' ? 'italic' : 'normal'
  }

  if( type === 'money' && currency === undefined ) {
    console.warn('Parameter currency is empty');
  }

  return(
    <td 
      colSpan={cells}
      style={style}
      align={type === 'number' || type === 'money' ? 'right' : 'left'}
      >
      {
        type === 'money' && currency !== undefined ? children + currency : children
      }
    </td>
  );
}

Cell.defaultProps = {
  cells: 1,
  type: 'text',
  color: '#000',
  background: '#fff'
}

export default Cell;