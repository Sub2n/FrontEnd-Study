import React, { useState } from 'react';

const EventPracticeFunc = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });

  const { username, message } = form;

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onClick = _ => {
    alert(username + ': ' + message);
    setForm({ username: '', message: '' });
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') onClick();
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracticeFunc;
