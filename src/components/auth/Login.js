import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { useForm } from 'react-hook-form';

import { AuthContainer } from '../styled/AuthStyles';
import { MainHeading } from '../styled/AppStyles';

const Login = ({ swapForms }) => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      let response = await fetch(`http://localhost:5000/user/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
      let userData = await response.json();
      if (!response.ok) {
        throw userData;
      }
      setIsLoading(false);
      auth.login(userData.id, userData.username, userData.token);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthContainer>
        <MainHeading>Login</MainHeading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='email'>Email</label>
            <div>
              <input
                name='email'
                type='email'
                placeholder='Enter your email'
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
                placeholder='Password'
                ref={register({
                  required: 'Please Enter a Valid Password',
                  minLength: { value: 6, message: 'miniumum of 6 characters' },
                })}
              />
              <p>{errors.password && errors.password.message}</p>
            </div>
          </div>

          <div>
            <p>{error}</p>
            <button type='submit' className='submitter'>
              Log In
            </button>
          </div>
        </form>
        <div className='hasLink'>
          Don't have an account?{' '}
          <button onClick={swapForms} type='button'>
            Sign Up
          </button>
        </div>
      </AuthContainer>
    </>
  );
};

export default Login;
