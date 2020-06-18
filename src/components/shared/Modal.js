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
    background-color: ${({ bgColor }) => bgColor || '#4f1ba6'};
    color: white;
    padding: 1rem 0.5rem;
    margin-bottom: 0.5rem;
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
  label {
    width: 100%;
    font-size: 1.2rem;
    @media (min-width: 768px) {
      padding: 1rem;
    }
  }
  input {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;

    @media (min-width: 768px) {
      margin: 0.75rem 0 0 0.75rem;
      width: 60%;
    }
  }

  ol {
    padding: 1.5rem 2.5rem 0.75rem 2.5rem;
    max-height: 20vh;
    overflow: auto;
    li {
      padding-bottom: 0.5rem;
    }
  }

  .warning {
    padding: 1rem;
    color: #dc3545;
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

const ErrorMessage = styled.div`
  max-width: 100%;
  color: red;
  padding: 0.5rem 2rem;
  background-color: white;
  border: 1px solid red;
`;

const ModalOverlay = props => {
  const content = (
    <ModalBox bgColor={props.bgColor}>
      <header>
        <h2>{props.header}</h2>
      </header>
      <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
        <div>
          {props.children}
          {props.errorMsg && <ErrorMessage>{props.errorMsg}</ErrorMessage>}
        </div>
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
