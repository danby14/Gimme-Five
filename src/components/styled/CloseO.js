import React from 'react';
import styled from 'styled-components/macro';
const StyledCloseO = styled.i`
  & {
    cursor: pointer;
    margin-left: ${({ margin }) => margin || '0'};
    /* margin-left: 0.4rem; */
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform: scale(var(--ggs, 0.65));
    min-width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 40px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 3px;
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
export const CloseO = React.forwardRef((props, ref) => {
  return (
    <>
      <StyledCloseO {...props} margin={props.margin} ref={ref} icon-role='close-o' />
    </>
  );
});
