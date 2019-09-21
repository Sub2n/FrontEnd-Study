const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const RSP = require('./RSP');
const Hot = hot(RSP);

ReactDom.render(<Hot />, document.querySelector('#root'));
