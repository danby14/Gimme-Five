import React from 'react';
import { Chevron } from './Chevron';
import { Button } from './Button';
import styled from 'styled-components/macro';

export const Inspiration = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid black;
  /* text-align: center;
  justify-content: center; */
  @media only screen and (min-width: 992px) {
    border: none;
    margin-bottom: 0;
    width: 31%;
    max-width: 350px;
    /* max-width: 31%; */
    flex-direction: column-reverse;
  }
`;

const Reveal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  /* font-size: ${({ theme }) => theme.fontSize.button}; */
  font-size: 1rem;
  background-color: #343a40;
  color: rgb(255, 255, 255, 0.9);
  padding: .5rem;
  flex-direction: row-reverse;
  align-items: center;

  span {
    margin: auto;
  }

  .topRight {
    position: absolute;
    top: -1px;
    right: 0;
  }

  a {
    color: white;
  }

  @media only screen and (min-width: 992px) {
    margin-bottom: 0.5rem;
    overflow: auto;
    height: 6rem;
    width: 100%;
  }
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

export const RandomButton = ({ children, add, subtract, handleSubmit }) => {
  return (
    <SimpleFlex>
      <Chevron rotate='135' onClick={subtract} />
      <Button onClick={handleSubmit}>{children}</Button>
      <Chevron rotate='315' onClick={add} />
    </SimpleFlex>
  );
};
