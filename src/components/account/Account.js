import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import { AuthContext } from '../context/auth-context';
import { MainHeading } from '../styled/AppStyles';

const AccountContainer = styled.div`
  div {
    margin-bottom: 1rem;
  }
`;

const Account = () => {
  const auth = useContext(AuthContext);
  return (
    <AccountContainer>
      <MainHeading>Account</MainHeading>
      <div>
        <h4>Username: </h4>
        {auth.userName}
      </div>
      <div>
        <h4>Id: </h4>
        {auth.userId}
      </div>
    </AccountContainer>
  );
};

export default Account;
