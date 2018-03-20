import * as React from 'react';
import { shallow } from 'enzyme';
import Code from './index';
let touchCode = 0;
function onCodeTouch(id: number) {
  touchCode = id;
}

function onCodeDelete(id: number) {
  console.log(id);
}

test('should render code correctly', () => {
  const code = shallow(
    <Code
      code={{ id: 1, value: 'abc', date: 123456 }}
      onCodeTouch={onCodeTouch}
      touchCode={touchCode}
      onCodeDelete={onCodeDelete}
    />
  );
  expect(code.getElement().props.children).toEqual('abc');
});
