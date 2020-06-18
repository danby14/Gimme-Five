import React, { useContext } from 'react';

import { AuthContext } from '../context/auth-context';
import { MainHeading } from '../styled/AppStyles';

const Account = () => {
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
    </div>
  );
};

export default Account;
