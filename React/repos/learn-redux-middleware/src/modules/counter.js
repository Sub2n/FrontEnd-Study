import { createAction, handleActions } from 'redux-actions';
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle
} from 'redux-saga/effects';

// Action Types
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

// Action Creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 클릭 이벤트가 payload에 들어가지 않도록 () => undefined를 두 번째 파라미터로 넣어준다.
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

// Generator function (saga)
function* increaseSaga() {
  yield delay(1000); // 1초를 기다린다.
  yield put(increase()); // action을 dispatch 한다.
  const number = yield select(state => state.counter);
  console.log(`현재 값은 ${number}입니다.`);
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);
  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소하고 가장 마지막으로 실행된 작업만 수행한다.
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

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
