import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { useForm } from 'react-hook-form';

import { AuthContainer } from '../styled/AuthStyles';
import { MainHeading } from '../styled/AppStyles';
import { AuthButton } from '../styled/Button';

const Login = ({ swapForms }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      let response = await fetch(`${BASE_URL}/user/login`, {
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
                type='email'
                placeholder='Enter your email'
                {...register('email', { required: 'Please Enter a Valid Email' })}
              />
              <p className='error'>{errors.email?.message}</p>
            </div>
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <div>
              <input
                type='password'
                placeholder='Password'
                {...register('password', {
                  required: 'Please Enter a Valid Password',
                  minLength: { value: 6, message: 'miniumum of 6 characters' },
                })}
              />
              <p className='error'>{errors.password?.message} </p>
            </div>
          </div>

          <div>
            <p className='error'>{error}</p>
            <AuthButton
              type='submit'
              loading={isLoading}
              spinColor='white'
              border='2px outset gray'
            >
              Log In
            </AuthButton>
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
