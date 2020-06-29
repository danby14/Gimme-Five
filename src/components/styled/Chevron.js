import React from 'react';
import styled from 'styled-components/macro';

const StyledChevron = styled.i`
  & {
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    display: block;
    /* transform: scale(var(--ggs, 0.7)); */
    transform: scale(var(--ggs, ${({ scale }) => scale || '.7'}));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: initial;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(${({ rotate }) => rotate || '0'}deg);
    left: 4px;
    top: 2px;
  }
`;
export const Chevron = React.forwardRef((props, ref) => {
  return (
    <>
      <StyledChevron {...props} ref={ref} icon-role='chevron-down' />
    </>
  );
});
