import React from 'react';
import { shallow } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';

import App from '../App';

it('App components mounted successfully', () => {
  const tree = shallow(<App />);

  expect(EnzymeToJson(tree)).toMatchSnapshot();
});
