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
      {login && <Login />}
      {register && <Register />}
      <div>
        <button onClick={loginHandler}>Login</button>
        <button onClick={registerHandler}>Register</button>
      </div>
    </div>
  );
};

export default Auth;
