import React from 'react';
import { shallow } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';
import { spy } from 'sinon';

import MainPage from '../components/MainPage';

describe('MainPage', () => {
  const wrapper = shallow(<MainPage />);

  it('components mounted successfully', () => {
    expect(EnzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('should show modal on click of _generateNumbers method', () => {
    wrapper.instance()._generateNumbers()
    expect(wrapper.state().show).toBe(true);
  });

  it('should hide modal on click of _closeModal method', () => {
    wrapper.instance()._closeModal()
    expect(wrapper.state().show).toBe(false);
  });

  it('should explicitly show modal on click of _openModal method', () => {
    wrapper.instance()._openModal()
    expect(wrapper.state().show).toBe(true);
  });

  it('input of value calls _handleChange method', () => {
    const spy = jest.spyOn(wrapper.instance(), '_handleChange');

    wrapper.find('input').simulate('change', { target: { value: '12' } });
  });
});
