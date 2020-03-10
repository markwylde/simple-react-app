const React = require('react')
const ReactDOM = require('react-dom')

const element = React.createElement(
  'div',
  {className: 'greeting'},
  'Hello, world!'
);

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(element, document.getElementById('myApp'))
})
