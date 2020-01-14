import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// Action Types
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값 변경
const INSERT = 'todos/INSERT'; // 새로운 todo 등록
const TOGGLE = 'todos/TOGGLE'; // todo를 체크, 체크 해제
const REMOVE = 'todos/REMOVE'; // todo를 제거

// Action Creators
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // 초기 상태로 2개가 들어가있을 예정. insert가 호출될 때마다 1씩 증가
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

// Initial State
const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 사용 Todo', done: false },
    { id: 2, text: '리액트와 리덕스 사용', done: true }
  ]
};

// Reducer Function
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, draft => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, draft => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      })
  },
  initialState
);

export default todos;
