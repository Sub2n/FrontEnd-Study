const React = require('react');
const { Component } = React;

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요.',
    result: [],
  };
  timeout;
  startTime;
  endTime;
  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요.',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭!',
        });
      }, Math.floor(Math.random() * 1000) + 2000);
      this.startTime = new Date();
    } else if (state === 'ready') {
      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요.',
      });
      clearTimeout(this.timeout);
    } else if (state === 'now') {
      this.endTime = new Date();
      this.setState(prevState => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요.',
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
    }
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <div>
        평균 시간: {result.reduce((a, b) => a + c) / this.state.result.length}
        ms
      </div>
    );
  };
  render() {
    return (
      <>
        <div
          id="screen"
          className={this.state.state}
          onClick={this.onClickScreen}
        >
          {this.state.message}
        </div>
        <div>{this.renderAverage()}</div>
      </>
    );
  }
}

module.exports = ResponseCheck;
