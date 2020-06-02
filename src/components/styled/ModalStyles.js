import React from 'react';
import { Button } from './Button';
import styled from 'styled-components/macro';

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  background-color: darkgray;
  /* @media only screen and (min-width: 992px) {
    border: none;
    margin-bottom: 0;
    width: 31%;
    max-width: 350px;
    flex-direction: column-reverse;
  } */
`;

export const InfoBox = ({ children }) => {
  return (
    <Reveal>
      <span>{children}</span>
    </Reveal>
  );
};

const SimpleFlex = styled.div`
  display: flex;
  justify-content: center;
  background-color: buttonface;
  align-items: flex-end;
`;

export const ModalWithBackdrop = ({ children, handleSubmit }) => {
  return (
    <Backdrop />
    <SimpleFlex>
      <Chevron rotate='135' onClick={subtract} />
      <Button onClick={handleSubmit}>{children}</Button>
      <Chevron rotate='315' onClick={add} />
    </SimpleFlex>
  );
};
