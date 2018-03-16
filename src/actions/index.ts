import { Code } from '../reducers';
import {
  SET_ACTIVE_CODE,
  ADD_CODE,
  DELETE_CODE,
  SET_CODE_LIST,
} from '../constants';

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
