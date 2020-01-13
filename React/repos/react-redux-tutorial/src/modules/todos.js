// Action Types
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값 변경
const INSERT = 'todos/INSERT'; // 새로운 todo 등록
const TOGGLE = 'todos/TOGGLE'; // todo를 체크, 체크 해제
const REMOVE = 'todos/REMOVE'; // todo를 제거

// Action Creators
export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
});
let id = 3; // 초기 상태로 2개가 들어가있을 예정. insert가 호출될 때마다 1씩 증가
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false
  }
});
export const toggle = id => ({
  type: TOGGLE,
  id
});
export const remove = id => ({
  type: REMOVE,
  id
});

// Initial State
const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 사용 Todo', done: false },
    { id: 2, text: '리액트와 리덕스 사용', done: true }
  ]
};

// Reducer Function
function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case INSERT:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        )
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.id)
      };
    default:
      return state;
  }
}

export default todos;
