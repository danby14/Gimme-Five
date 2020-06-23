import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import { AuthContext } from '../context/auth-context';
import { MainHeading } from '../styled/AppStyles';
import VotesGraph from '../shared/VotesGraph';

const Account = () => {
  const GraphHolder = styled.div`
    /* height: 500px; */
    width: 95%;

    @media only screen and (min-width: 992px) {
      width: 60%;
    }
  `;
  const auth = useContext(AuthContext);
  return (
    <div>
      <MainHeading>Account</MainHeading>
      <div>
        <h4>Username: </h4>
        {auth.userName}
      </div>
      <div>
        <h4>Id: </h4>
        {auth.userId}
      </div>
      <GraphHolder>
        <VotesGraph results={[1, 4, 6]} />
      </GraphHolder>
    </div>
  );
};

export default Account;
