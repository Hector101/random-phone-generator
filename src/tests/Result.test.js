import React from 'react';
import { shallow } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';

import Result from '../components/Result';

describe('Result', () => {
  const wrapper = shallow(<Result data={[{ id: 1, phoneNumber: '06372676237'}]}/>);

  it('components mounted successfully', () => {
    expect(EnzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('should save data on _savePhoneNumbers call', () => {
    window.URL = {
      createObjectURL: () => {}
    };
    const spy = jest.spyOn(wrapper.instance(), '_savePhoneNumbers');

    wrapper.find('button').simulate('click');
  });
});
