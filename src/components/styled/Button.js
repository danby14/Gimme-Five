import React from 'react';
import styled from 'styled-components/macro';
const BasicButton = styled.button`
  font-family: montserrat;
  font-weight: 400;
  padding: 4px;
  width: 130px;
  height: 1.7rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  user-select: none;
  :focus {
    outline-color: grey;
  }
`;

const SubmitButton = styled(BasicButton)`
  font-size: 1rem;
  padding: 5px;
  height: auto;
  width: auto;
  font-family: sanchez;
  /* background-color: buttonface; */
  background-color: ${({ bgColor }) => bgColor || '#efefef'};
  color: ${({ color }) => color || ''};
  display: ${prop => (prop.disabled ? 'none' : '')};
`;

export const Button = ({ children, onClick }) => {
  return <BasicButton onClick={onClick}>{children}</BasicButton>;
};

export const Button2 = ({ children, onClick, bgColor, color, disabled }) => {
  return (
    <SubmitButton onClick={onClick} bgColor={bgColor} color={color} disabled={disabled}>
      {children}
    </SubmitButton>
  );
};
