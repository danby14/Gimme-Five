import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { useForm } from 'react-hook-form';

import { MainHeading } from '../styled/AppStyles';

const Register = () => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      let response = await fetch(
        `http://localhost:5000/user/register`,
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
      <MainHeading>Register</MainHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='username'>Username</label>
          <div>
            <input
              name='username'
              type='text'
              ref={register({
                required: 'Please Enter a Valid Username',
                maxLength: { value: 20, message: 'max of 20 characters' },
              })}
            />
            <p className='has-text-danger'>{errors.username && errors.username.message}</p>
          </div>
        </div>

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
          <label htmlFor='opt_in'>Opt-in to future newsletters</label>
          <div>
            <label className='radio'>
              &nbsp;
              <input
                name='opt_in'
                type='radio'
                value='true'
                ref={register({ required: 'Please Choose One' })}
              />
              {' Yes  '}&nbsp;
            </label>
            <label>
              <input
                name='opt_in'
                type='radio'
                value='false'
                ref={register({ required: 'Please Choose One' })}
              />
              {' No'}
            </label>
            <p>{errors.optIn && errors.optIn.message}</p>
          </div>
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Register;
