import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/graph';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.decapitalize = function() {
  return this.charAt(0).toLowerCase() + this.slice(1);
}

ReactDOM.render(
  <Graph url='data/h1bs.csv' />,
  document.querySelectorAll('.graph')[0]
);
