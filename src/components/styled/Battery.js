import React from 'react';
import styled from 'styled-components';
const StyledBattery = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 12px;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-radius: 3px;
    margin-left: -3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 6px;
    background: currentColor;
    top: 1px;
  }
  &::before {
    right: -4px;
    border-radius: 3px;
    width: 4px;
  }
  &::after {
    /* change width to fill battery bar 1-14px, empty has no ::after at all*/
    width: ${({ width }) => width || '0'};
    left: 1px;
  }
`;
export const Battery = React.forwardRef((props, ref) => {
  return (
    <>
      <StyledBattery {...props} ref={ref} width={props.width} icon-role='battery' />
    </>
  );
});
