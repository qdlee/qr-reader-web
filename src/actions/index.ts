import { Code } from '../reducers';
export const SET_ACTIVE_CODE = 'SET_ACTIVE_CODE';
export const ADD_CODE = 'ADD_CODE';
export const DELETE_CODE = 'DELETE_CODE';
export const SET_CODE_LIST = 'SET_CODE_LIST';

export function setActiveCode(code: string) {
  return {
    type: SET_ACTIVE_CODE,
    code,
  };
}

export function addCode(code: string) {
  return {
    type: ADD_CODE,
    code,
  };
}

export function deleteCode(id: string) {
  return {
    type: DELETE_CODE,
    id,
  };
}

export function setCodeList(codeList: Code[]) {
  return {
    type: SET_CODE_LIST,
    codeList,
  };
}
