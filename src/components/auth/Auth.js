import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const loginHandler = () => {
    setRegister(false);
    setLogin(true);
  };

  const registerHandler = () => {
    setLogin(false);
    setRegister(true);
  };

  return (
    <div>
      {login && <Login swapForms={registerHandler} />}
      {register && <Register swapForms={loginHandler} />}
    </div>
  );
};

export default Auth;
