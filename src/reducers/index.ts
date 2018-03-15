/**
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
import { combineReducers } from "redux";

export interface ReduxState {
  activeCode: string;
  codeList: Code[]
}

interface Action {
  type: string;
  code?: string;
  id?: number;
  [propName: string]: any;
}

function activeCode(state = "", action: Action) {
  switch (action.type) {
    case "SET_ACTIVE_CODE":
      return action.code;
    default:
      return state;
  }
}

interface Code {
  id: number;
  code: string;
  date: number;
}

function codeList(state: Code[] = [], action: Action) {
  switch (action.type) {
    case "ADD_CODE":
      const id = state.length ? state[state.length - 1].id + 1 : 1;
      return [...state, { id, code: action.code, date: Date.now() }];
    case "DELETE_CODE":
      return state.filter((code: Code) => code.id !== action.id);
    default:
      return state;
  }
}
const rootReducer = combineReducers({ activeCode, codeList });
export default rootReducer;
