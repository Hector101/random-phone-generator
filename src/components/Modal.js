import React from "react";
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  element = document.createElement('div');
  componentDidMount() {
    modalRoot.appendChild(this.element);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }
  render() {
    return createPortal(this.props.children, this.element);
  }
};

export default Modal;
