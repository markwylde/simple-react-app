const React = require('react');
const { useState } = require('react');
const ReactDOM = require('react-dom');

const h = React.createElement;

function Clicker ({ count, setCount }) {
  return h('button', {
    onClick: () => {
      setCount(count + 1);
    }
  }, count);
}

function App ({ value }) {
  const [count, setCount] = useState(0);

  return h('div', { className: 'greeting' }, 'Hello ' + value,
    h(Clicker, { count, setCount })
  );
}

document.addEventListener('DOMContentLoaded', function () {
  const ui = h(App, { value: 'Laura' });
  ReactDOM.render(ui, document.getElementById('myApp'));
});
