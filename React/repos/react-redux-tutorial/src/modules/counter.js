import { createAction, handleActions } from 'redux-actions';

// Action Types
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action Creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// Initial State
const initialState = {
  number: 0
};

// Reducer Function
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 })
  },
  initialState
);

export default counter;
