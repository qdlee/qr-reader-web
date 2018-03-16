import rootReducer, { Code } from './index';
import { setActiveCode, addCode, deleteCode, setCodeList } from '../actions';
const codeItem = { id: 1, value: 'code', date: 1234567 };
const initialState = { activeCode: undefined, codeList: undefined };
describe('reducer index - activeCode', () => {
  it('should return default "empty string"', () => {
    expect(rootReducer(initialState, { type: '' }).activeCode).toEqual('');
  });

  it('dispatch SET_ACTIVE_CODE action, should return new activeCode', () => {
    expect(
      rootReducer({ ...initialState, activeCode: '' }, setActiveCode('code'))
        .activeCode
    ).toEqual('code');
  });
});

describe('reducer index - codeList', () => {
  it('should return default "[]"', () => {
    expect(rootReducer(initialState, { type: '' }).codeList).toEqual([]);
  });

  it('dispatch ADD_CODE action, should return codeList with the new code', () => {
    const codeList = rootReducer(
      { ...initialState, codeList: [] },
      addCode(codeItem.value)
    ).codeList as Code[];
    const newCode = codeList.find(code => code.id === 1);
    expect(newCode).toBeTruthy();
  });

  it('dispatch DELETE_CODE action, should return codeList without the deleted code', () => {
    const codeList = rootReducer(
      { ...initialState, codeList: [codeItem] },
      deleteCode(1)
    ).codeList as Code[];
    const deletedCode = codeList.find(code => code.id === 1);
    expect(deletedCode).toBeUndefined();
  });

  it('dispatch SET_CODE_LIST action, should return the new codeList', () => {
    const codeList = rootReducer(
      { ...initialState, codeList: [] },
      setCodeList([codeItem])
    ).codeList;
    expect(codeList).toEqual([codeItem]);
  });
});
