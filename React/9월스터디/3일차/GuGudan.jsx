const React = require('react');
const { useState, useRef } = React;

const GuGudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult(prevResult => {
        return `${value} 정답!`;
      });
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  return (
    <React.Fragment>
      <div>
        {first} 곱하기 {second} 는?
      </div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="number" value={value} onChange={onChange} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </React.Fragment>
  );
};

module.exports = GuGudan;
