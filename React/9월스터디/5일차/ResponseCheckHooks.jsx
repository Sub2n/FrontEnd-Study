const React = require('react');
const { useState, useRef } = React;

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');

      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭!');
      }, Math.floor(Math.random() * 1000) + 2000);

      startTime.current = new Date();
    } else if (state === 'ready') {
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');

      clearTimeout(timeout.current);
    } else if (state === 'now') {
      endTime.current = new Date();

      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult(prevResult => [
        ...prevResult,
        endTime.current - startTime.current,
      ]);
    }
  };

  const onReset = () => {
    setResult([]);
  };

  renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>
          평균 시간: {result.reduce((a, b) => a + c) / result.length}
          ms
        </div>

        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      <div>{renderAverage()}</div>
    </>
  );
};

module.exports = ResponseCheck;
