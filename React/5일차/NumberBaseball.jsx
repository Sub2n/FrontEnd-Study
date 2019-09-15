const React = require('react');
const { Component } = React;
const Try = require('./try');

// 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
function getNumbers() {}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = () => {};

  onChangeInput = e => {
    console.log(this);

    this.setState({
      value: e.target.value,
    });
  };

  fruits = [
    { fruit: '복숭아', taste: '맛있다' },
    { fruit: '수박', taste: '맛있다' },
    { fruit: '바나나', taste: '그냥그래' },
    { fruit: '무화과', taste: '흠' },
  ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
            type="text"
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.fruits.map(v => {
            return <Try key={v.fruit + v.taste} value={v} />;
          })}
        </ul>
      </>
    );
  }
}

module.exports = NumberBaseball;
