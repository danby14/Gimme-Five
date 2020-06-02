import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components/macro';

const Backdrop = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
`;

const ModalBox = styled.div`
  z-index: 100;
  position: fixed;
  top: 22vh;
  left: 10%;
  width: 80%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }

  header {
    background: #4f1ba6;
    color: white;
    padding: 1rem 0.5rem;
    h2 {
      margin: 0.5rem;
    }
  }
  textarea {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
  }
  footer {
    padding: 0.5rem 0.5rem;
    text-align: right;
  }
  button {
    margin-right: 25px;
    padding: 10px;
  }
`;

const ModalOverlay = props => {
  const content = (
    <ModalBox>
      <header>
        <h2>{props.header}</h2>
      </header>
      <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
        <div>{props.children}</div>
        <footer>{props.footer}</footer>
      </form>
    </ModalBox>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
  return (
    <>
      {props.show && <Backdrop />}
      {props.show && <ModalOverlay {...props} />}
    </>
  );
};

export default Modal;
