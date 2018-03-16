import { setActiveCode, addCode, deleteCode, setCodeList } from './index';

describe('action index', () => {
  it('setActiveCode should create SET_ACTIVE_CODE action', () => {
    expect(setActiveCode('code')).toEqual({
      type: 'SET_ACTIVE_CODE',
      code: 'code',
    });
  });

  it('addCode should create ADD_CODE action', () => {
    expect(addCode('code')).toEqual({
      type: 'ADD_CODE',
      code: 'code',
    });
  });

  it('deleteCode should create DELETE_CODE action', () => {
    expect(deleteCode(1)).toEqual({
      type: 'DELETE_CODE',
      id: 1,
    });
  });

  it('setCodeList should create SET_CODE_LIST action', () => {
    const codeItem = { id: 1, value: 'code', date: 1234567 };
    expect(setCodeList([{ ...codeItem }])).toEqual({
      type: 'SET_CODE_LIST',
      codeList: [{ ...codeItem }],
    });
  });
});
