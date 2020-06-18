import React, { useState, useContext } from 'react';
import styled from 'styled-components/macro';
import { AuthContext } from '../context/auth-context';
import { useForm } from 'react-hook-form';

const VoteContainer = styled.div`
  p {
    text-align: left;
  }
  input {
    margin: 0.75rem;
  }
  .err {
    color: red;
    text-align: left;
    padding: 0.3rem;
  }
`;

const Vote = ({ listId }) => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    data.voter_id = auth.userId;
    setIsLoading(true);
    try {
      let response = await fetch(
        `http://localhost:5000/votes/post/${listId}`,
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
      if (!response.ok) {
        throw new Error(userData.message);
      }
      setError(null);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  return (
    <VoteContainer>
      {auth.userId && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='vote'>Choose your favorite (can only vote once)</label>
          <div>
            1<input name='vote' type='radio' value='1' ref={register({ required: true })} />
            2<input name='vote' type='radio' value='2' ref={register({ required: true })} />
            3<input name='vote' type='radio' value='3' ref={register({ required: true })} />
            4<input name='vote' type='radio' value='4' ref={register({ required: true })} />
            5<input name='vote' type='radio' value='5' ref={register({ required: true })} />
          </div>
          {error && <p className='err'>{error.message}</p>}
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      )}
      {!auth.userId && <p>Must be logged in to Vote and see results.</p>}
    </VoteContainer>
  );
};

export default Vote;
