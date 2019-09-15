const React = require('react');
const { Component } = React;

class Try extends Component {
  render() {
    return (
      <li>
        <b>{this.props.value.fruit}</b> - {this.props.value.taste}
        <div>content1</div>
        <div>content2</div>
        <div>content3</div>
        <div>content4</div>
      </li>
    );
  }
}

module.exports = Try;
