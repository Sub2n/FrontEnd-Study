import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>{' '}
      {/* 부모 컴포넌트에서 이 컴포넌트 사이에 넣은 content를 children으로 받아옴 */}
    </div>
  );
};
export default TodoTemplate;
