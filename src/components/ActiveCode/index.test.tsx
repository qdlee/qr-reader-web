import * as React from 'react';
import { shallow } from 'enzyme';
import ActiveCode from './index';

test('should render code correctly', () => {
  const code = shallow(<ActiveCode code="abc" />);
  expect(code.getElement().props.children).toEqual('abc');
});
