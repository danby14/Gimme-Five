import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { useForm } from 'react-hook-form';

import { AuthContainer, Checkbox } from '../styled/AuthStyles';
import { AuthButton } from '../styled/Button';
import { MainHeading } from '../styled/AppStyles';

const Register = ({ swapForms }) => {
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
      let response = await fetch(`${BASE_URL}/user/register`, {
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
    <AuthContainer>
      <MainHeading>Register</MainHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='username'>Username</label>
          <div>
            <input
              type='text'
              {...register('username', {
                required: 'Please Enter a Valid Username',
                maxLength: { value: 20, message: 'max of 20 characters' },
              })}
            />
            <p className='error'>{errors.username?.message}</p>
          </div>
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <div>
            <input
              type='email'
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
              {...register('password', {
                required: 'Please Enter a Valid Password',
                minLength: { value: 6, message: 'miniumum of 6 characters' },
              })}
            />
            <p className='error'>{errors.password?.message}</p>
          </div>
        </div>

        <div>
          <label htmlFor='opt_in'>Opt-in to future newsletters</label>
          <Checkbox placeholder='opt_in' {...register('opt-in')} />
        </div>

        <div>
          <p className='error'>{error}</p>
          <AuthButton type='submit' loading={isLoading} spinColor='white' border='2px outset gray'>
            Submit
          </AuthButton>
        </div>
      </form>
      <div className='hasLink'>
        Already have an account?{' '}
        <button onClick={swapForms} type='button'>
          Log In
        </button>
      </div>
    </AuthContainer>
  );
};

export default Register;
