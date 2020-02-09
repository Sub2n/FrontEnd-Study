import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

// 액션 타입 생성
// 한 요청 당 세개를 만들어야 함
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

/*
thunk 함수 생성
thunk 함수 내부에서는
1. 시작
2. 성공
3. 실패했을 때 다른 액션을 dispatch
*/
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 초기 상태 선언
const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false
  },
  post: null,
  users: null
};

// Reducer
const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload
    })
  },
  initialState
);

export default sample;
