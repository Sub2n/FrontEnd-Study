import React from 'react';
import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      {/* 주석은 이렇게 작성합니다. */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
      >
        {name}
      </div>
      <input />
    </>
  );
}

export default App;
