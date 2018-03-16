/*
 *  const state = {
      code: 'http://www.google.com',
      history: [
        {
          id:1,
          code: 'rqw3333',
          date: 1234401294210,
        }
      ]
    }
 */
import { combineReducers } from 'redux';
import {
  SET_ACTIVE_CODE,
  ADD_CODE,
  DELETE_CODE,
  SET_CODE_LIST,
} from '../constants';

export interface ReduxState {
  activeCode: string;
  codeList: Code[];
}

interface Action {
  type: string;
  code?: string;
  id?: number;
  codeList?: Code[];
}

function activeCode(state: string = '', action: Action) {
  switch (action.type) {
    case SET_ACTIVE_CODE:
      return action.code;
    default:
      return state;
  }
}

export interface Code {
  id: number;
  value: string;
  date: number;
}

function codeList(state: Code[] = [], action: Action) {
  switch (action.type) {
    case SET_CODE_LIST:
      return action.codeList;
    case ADD_CODE:
      const id = state.length ? state[state.length - 1].id + 1 : 1;
      return [...state, { id, value: action.code, date: Date.now() }];
    case DELETE_CODE:
      return state.filter((code: Code) => code.id !== action.id);
    default:
      return state;
  }
}
export default combineReducers<{ activeCode?: string; codeList?: Code[] }>({
  activeCode,
  codeList,
});
