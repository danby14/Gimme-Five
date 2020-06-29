import React from 'react';
import styled from 'styled-components/macro';
import { Battery } from '../styled/Battery';

const StatusContainer = styled.div`
  /* margin-left: 1.5rem; */
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  color: ${props => props.color};
  .rotate {
    transform: rotate(270deg);
  }
  .info-text {
    margin-left: 1rem;
  }
`;

const ListsRemaining = ({ listsUsed }) => {
  let width = '14px';
  let color = 'blue';
  if (listsUsed > 0) {
    if (listsUsed === 1) {
      width = '9px';
      color = 'royalblue';
    } else if (listsUsed === 2) {
      width = '4px';
      color = 'orange';
    } else {
      width = '0';
      color = 'red';
    }
  }

  return (
    <StatusContainer color={color}>
      <Battery className='rotate' width={width} />
      <div className='info-text'>{3 - listsUsed} slots remaining.</div>
    </StatusContainer>
  );
};

export default ListsRemaining;
