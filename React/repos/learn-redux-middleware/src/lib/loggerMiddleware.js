const loggerMiddleware = store => next => action => {
  console.group(action && action.type); // action type으로 log를 그룹화
  console.log('이전 상태', store.getState());
  console.log('액션', action);
  next(action); // 다음 미들웨어 (없으면 리듀서)에게 액션 전달
  console.log('다음 상태', store.getState()); // 업데이트된 상태
  console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;
