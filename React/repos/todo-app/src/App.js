import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트의 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링 해보기', checked: true },
    { id: 3, text: 'TodoList 만들어보기', checked: false },
  ]);

  // 고유값으로 사용될 id. 렌더링에 변화주지않으므로 ref를 사용함
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos([todo, ...todos]);
      nextId.current += 1;
      console.log(nextId.current);
    },
    [todos],
  ); // todos에 변경이 있을 때만 이벤트 핸들러 함수를 생성한다. (리렌더링될 때마다 생성 X)

  const onRemove = useCallback(
    id => {
      const nextTodos = todos.filter(todo => todo.id !== id);
      setTodos(nextTodos);
    },
    [todos],
  );

  const onToggle = useCallback(id =>
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    ),
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
