import * as React from 'react';
import { shallow } from 'enzyme';
import Divider from './index';

test('Divider should render properly', () => {
  const divider = shallow(<Divider />);
  const expectedHtml =
    '<div style="height:1px;margin-left:15px;background-color:#e5e5e5"></div>';
  expect(divider.html()).toEqual(expectedHtml);
});
