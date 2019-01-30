import React from "react";
import { createPortal } from 'react-dom';

class Modal extends React.Component {
  element = document.createElement('div');
  modalRoot = document.getElementById('modal-root');
  
  componentDidMount() {
    this.modalRoot.appendChild(this.element);
  }
  componentWillUnmount() {
    this.modalRoot.removeChild(this.element);
  }
  render() {
    return createPortal(this.props.children, this.element);
  }
};

export default Modal;
