import React from 'react';
import { mount } from 'enzyme';

import Modal from '../components/Modal';

describe('Modal', () => {
  const Child = () => <div>Mock component</div>;
  let component;

  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);

  afterEach(() => {
    component.unmount();
  });

  it('should render all the styled components and the children', () => {
    component = mount(
      <Modal>
        <Child />
      </Modal>,
    );
    expect(component.find(Child).exists()).toBeTruthy();
  });
});