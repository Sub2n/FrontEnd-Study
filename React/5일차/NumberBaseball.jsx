const React = require('react');
const { useState, memo, createRef } = React;
const Try = require('./try');

// 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = memo(() => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = e => {
    e.preventDefault();
    if (value === answer.join('')) {
      // 답 맞춤
      setResult('홈런!');
      setTries(prevState => [
        ...prevState.tries,
        { try: value, result: '홈런!' },
      ]);

      alert('게임을 다시 시작합니다!');

      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      // 답 틀림
      const answerArray = value.split('').map(v => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        // 10번 이상 틀렸을 때
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
        alert('게임을 다시 시작합니다!');

        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        // 10번 이하로 틀렸을 때
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries(prevState => [
          ...prevState,
          {
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          },
        ]);
        setValue('');
      }
    }
  };

  const onChangeInput = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          maxLength={4}
          value={value}
          onChange={onChangeInput}
          type="text"
        />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도`} tryInfo={v} />;
        })}
      </ul>
    </>
  );
});

// class NumberBaseball extends Component {
//   state = {
//     result: '',
//     value: '',
//     answer: getNumbers(),
//     tries: [], //push 쓰면 안된대
//   };

//   onSubmitForm = e => {
//     e.preventDefault();
//     if (this.state.value === this.state.answer.join('')) {
//       // 답 맞춤
//       this.setState(prevState => {
//         return {
//           result: '홈런!',
//           tries: [
//             ...prevState.tries,
//             { try: this.state.value, result: '홈런!' },
//           ],
//         };
//       });
//       alert('게임을 다시 시작합니다!');
//       this.setState({
//         value: '',
//         answer: getNumbers(),
//         tries: [],
//       });
//     } else {
//       // 답 틀림
//       const answerArray = this.state.value.split('').map(v => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if (this.state.tries.length >= 9) {
//         // 10번 이상 틀렸을 때
//         this.setState({
//           result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(
//             ','
//           )}였습니다!`,
//         });
//         alert('게임을 다시 시작합니다!');
//         this.setState({
//           value: '',
//           answer: getNumbers(),
//           tries: [],
//         });
//       } else {
//         // 10번 이하로 틀렸을 때
//         for (let i = 0; i < 4; i++) {
//           if (answerArray[i] === this.state.answer[i]) {
//             strike += 1;
//           } else if (this.state.answer.includes(answerArray[i])) {
//             ball += 1;
//           }
//         }
//         this.setState(prevState => {
//           return {
//             tries: [
//               ...prevState,
//               {
//                 try: this.state.value,
//                 result: `${strike} 스트라이크, ${ball} 볼입니다.`,
//               },
//             ],
//             value: '',
//           };
//         });
//       }
//     }
//   };

//   onChangeInput = e => {
//     this.setState({
//       value: e.target.value,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1>{this.state.result}</h1>
//         <form onSubmit={this.onSubmitForm}>
//           <input
//             maxLength={4}
//             value={this.state.value}
//             onChange={this.onChangeInput}
//             type="text"
//           />
//         </form>
//         <div>시도: {this.state.tries.length}</div>
//         <ul>
//           {this.state.tries.map((v, i) => {
//             return <Try key={`${i + 1}차 시도`} tryInfo={v} />;
//           })}
//         </ul>
//       </>
//     );
//   }
// }

module.exports = NumberBaseball;
