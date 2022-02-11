import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components/macro';
import { AuthContext } from '../context/auth-context';
import { useForm } from 'react-hook-form';
import { useTally } from '../../hooks/useTally';
import { Button2 } from '../styled/Button';
import VotesGraph from '../shared/VotesGraph';

const VoteContainer = styled.div`
  width: 95% p {
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
  @media only screen and (min-width: 992px) {
    width: 65%;
  }
`;

const Vote = ({ listId, votes, update }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();
  const [voted, setVoted] = useState(false);
  const [votesTally, setVotesTally] = useState(null);
  const info = useTally(votesTally);

  useEffect(() => {
    if (votes) {
      let voterIds = votes.map(vote => vote.voter_id);
      let allVotes = votes.map(vote => vote.vote);
      if (voterIds.includes(auth.userId)) {
        setVoted(true);
        setVotesTally(allVotes);
      }
    }
  }, [auth.userId, votes]);

  const onSubmit = async data => {
    data.voter_id = auth.userId;
    setIsLoading(true);
    try {
      let response = await fetch(
        `${BASE_URL}/votes/post/${listId}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.token,
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
      update();
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  return (
    <VoteContainer>
      {auth.userId && !voted && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='vote'>Choose your favorite (can only vote once)</label>
          <div>
            1
            <input type='radio' value='1' {...register('vote', { required: true })} />
            2
            <input type='radio' value='2' {...register('vote', { required: true })} />
            3
            <input type='radio' value='3' {...register('vote', { required: true })} />
            4
            <input type='radio' value='4' {...register('vote', { required: true })} />
            5
            <input type='radio' value='5' {...register('vote', { required: true })} />
          </div>
          {error && <p className='err'>{error.message}</p>}
          <div>
            <Button2
              type='submit'
              loading={isLoading}
              spinColor='white'
              bgColor='#098d9c'
              color='white'
              border='1.5px solid mediumblue'
            >
              Submit
            </Button2>
          </div>
        </form>
      )}
      {auth.userId && voted && <VotesGraph results={info} />}
      {!auth.userId && <p>Must be logged in to Vote and see results.</p>}
    </VoteContainer>
  );
};

export default Vote;
