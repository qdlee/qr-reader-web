export const SET_ACTIVE_CODE = "SET_CODE";
export const ADD_CODE = "ADD_CODE";
export const DELETE_CODE = "DELETE_CODE";

export function setActiveCode(code: string) {
  return {
    type: SET_ACTIVE_CODE,
    code
  };
}

export function addCode(code: string) {
  return {
    type: ADD_CODE,
    code
  };
}

export function deleteCode(id: string) {
  return {
    type: DELETE_CODE,
    id
  };
}
