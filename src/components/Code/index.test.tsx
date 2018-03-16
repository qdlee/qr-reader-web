import * as React from 'react';
import { shallow } from 'enzyme';
import Code from './index';

test('should render code correctly', () => {
  const code = shallow(<Code code={{ id: 1, value: 'abc', date: 123456 }} />);
  expect(code.getElement().props.children).toEqual('abc');
});
