const React = require('react');
const { Component } = React;

class Test extends Component {
  state = {
    counter: 0,
  };
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.counter !== nextState.counter) return true;
    else return false;
  }
  onClick = () => {
    this.setState({});
  };
  render() {
    console.log('렌더링', this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}
module.exports = Test;
