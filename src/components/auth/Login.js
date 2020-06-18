import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { useForm } from 'react-hook-form';

import { MainHeading } from '../styled/AppStyles';

const Login = () => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      let response = await fetch(
        `http://localhost:5000/user/login`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
        { withCredentials: true }
      );
      let userData = await response.json();
      // console.log(userData, 'userData');
      setIsLoading(false);
      auth.login(userData.id, userData.username);
      // auth.login(userData.id, userData.username, userData.token);
    } catch (err) {
      setError(err.response.data);
      setIsLoading(false);
    }
  };

  return (
    <>
      <MainHeading>Login</MainHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='email'>Email</label>
          <div>
            <input
              name='email'
              type='email'
              ref={register({ required: 'Please Enter a Valid Email' })}
            />
            <p>{errors.email && errors.email.message}</p>
          </div>
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <div>
            <input
              name='password'
              type='password'
              ref={register({
                required: 'Please Enter a Valid Password',
                minLength: { value: 6, message: 'miniumum of 6 characters' },
              })}
            />
            <p>{errors.password && errors.password.message}</p>
          </div>
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Login;
