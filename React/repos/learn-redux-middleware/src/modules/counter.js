import { createAction, handleActions } from 'redux-actions';

// Action Types
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action Creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// Thunk Creators
export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

// Initial State
const initialState = 0; // 객체가 아니고 숫자로 하나의 state만 관리

// Reducer
const counter = handleActions(
  {
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1
  },

  initialState
);

export default counter;
