import React from 'react';
import styled from 'styled-components';

const StyledChevron = styled.i`
  & {
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    display: block;
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
    position: absolute;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    top: 4px;
  }
`;
const StyledChevronLeft = styled(StyledChevron)`
  &::after {
    border-left: 2px solid;
    transform: rotate(45deg);
    left: 6px;
  }
`;
const StyledChevronRight = styled(StyledChevron)`
  &::after {
    border-right: 2px solid;
    transform: rotate(-45deg);
    right: 6px;
  }
`;

export const ChevronLeft = React.forwardRef((props, ref) => {
  return <StyledChevronLeft {...props} ref={ref} icon-role='chevron-left' />;
});

export const ChevronRight = React.forwardRef((props, ref) => {
  return <StyledChevronRight {...props} ref={ref} icon-role='chevron-right' />;
});
