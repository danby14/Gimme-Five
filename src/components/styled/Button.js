import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const BasicButton = styled.button`
  font-family: montserrat;
  font-weight: 400;
  padding: 4px;
  width: 130px;
  height: 1.7rem;
  border: ${({ border }) => border || '0'};
  /* border: none; */
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
  background-color: ${({ bgColor }) => bgColor || '#efefef'};
  color: ${({ color }) => color || ''};
  display: ${prop => (prop.disabled ? 'none' : '')};
  position: relative;
`;

const StyledAuthButton = styled(BasicButton)`
  font-family: 'Muli', sans-serif;
  width: 100%;
  height: 100%;
  padding: 0.75rem 0;
  margin-top: 0.6rem;
  color: #ffffff;
  font-size: 1rem;
  line-height: 20px;
  text-align: center;
  background-color: #10182f;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
`;

const ButtonText = styled.p`
  transition: opacity 200ms;
  transition-delay: ${({ isLoading }) => (isLoading ? '0ms' : '200ms')};
  width: 100%;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
}`;

const LoadingSpinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: ${({ spinColor }) => (spinColor ? spinColor : '#000')};
  border-right-color: ${({ spinColor }) => (spinColor ? spinColor : '#000')};
  border-bottom-color: ${({ spinColor }) => (spinColor ? spinColor : '#000')};
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  width: 16px;
  height: 16px;
  transition: opacity 200ms;
  animation: ${rotate} 1s linear;
  animation-iteration-count: infinite;
  transition-delay: ${({ isLoading }) => (isLoading ? '200ms' : '0ms')};
`;

export const Button = ({ children, onClick }) => {
  return <BasicButton onClick={onClick}>{children}</BasicButton>;
};

export const Button2 = ({
  children,
  onClick,
  bgColor,
  color,
  spinColor,
  disabled,
  loading,
  border,
}) => {
  return (
    <SubmitButton
      isLoading={loading}
      onClick={onClick}
      bgColor={bgColor}
      color={color}
      disabled={disabled}
      border={border}
    >
      <LoadingSpinner spinColor={spinColor} isLoading={loading} />
      <ButtonText isLoading={loading}>{children}</ButtonText>
    </SubmitButton>
  );
};

export const AuthButton = ({ children, onClick, spinColor, loading, border }) => {
  return (
    <StyledAuthButton isLoading={loading} onClick={onClick} border={border}>
      <LoadingSpinner spinColor={spinColor} isLoading={loading} />
      <ButtonText isLoading={loading}>{children}</ButtonText>
    </StyledAuthButton>
  );
};
