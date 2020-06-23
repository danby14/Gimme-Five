import React from 'react';
import styled from 'styled-components/macro';
import VotesGraph from '../shared/VotesGraph';
import { useTally } from '../../hooks/useTally';

const ListVotes = ({ votes }) => {
  const VotesResults = styled.div`
    width: 95%;

    @media only screen and (min-width: 992px) {
      width: 65%;
    }
  `;

  const allVotes = useTally(votes);

  return (
    <VotesResults>
      <VotesGraph results={allVotes} />
    </VotesResults>
  );
};

export default ListVotes;
