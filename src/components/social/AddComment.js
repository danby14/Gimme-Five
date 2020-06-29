import React, { useState, useContext } from 'react';
import styled from 'styled-components/macro';
import { AuthContext } from '../context/auth-context';
import { useForm } from 'react-hook-form';
import Modal from '../shared/Modal';
import { Button2 } from '../styled/Button';

const AddCommentContainer = styled.div`
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  button {
    background: none;
    border: none;
    color: blue;
    font-size: 0.95rem;
  }
  textarea {
    width: 100%;
  }
`;

const ErrorText = styled.p`
  margin-left: 1rem;
  color: red;
`;

const AddComment = ({ listId, update }) => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const [showModal, setShowModal] = useState(false);
  const onSubmit = async data => {
    data.commentor_id = auth.userId;
    setIsLoading(true);
    try {
      let response = await fetch(
        `http://localhost:5000/comments/post/${listId}`,
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
      console.log('Comment added at:', userData[0].created_at);
      setIsLoading(false);
      modalViewer();
      update();
    } catch (err) {
      setError(err.response.data);
      setIsLoading(false);
    }
  };

  const modalViewer = () => {
    setShowModal(!showModal);
  };

  return (
    <AddCommentContainer>
      <Modal
        show={showModal}
        header={'Add Comment'}
        onSubmit={handleSubmit(onSubmit)}
        footer={
          <>
            <Button2
              type='submit'
              loading={isLoading}
              bgColor='#098d9c'
              color='white'
              spinColor='white'
            >
              Submit
            </Button2>
            <Button2 onClick={modalViewer}>Close</Button2>
          </>
        }
      >
        <textarea
          name='comment'
          type='text'
          ref={register({
            required: 'Please Enter a Comment',
            minLength: { value: 5, message: 'Min of 5 characters' },
            maxLength: { value: 200, message: 'Max of 200 characters' },
          })}
        />
        <ErrorText>{errors.comment && errors.comment.message}</ErrorText>
        {error && <ErrorText>{error}</ErrorText>}
      </Modal>
      {auth.userId && <button onClick={modalViewer}>Add Comment</button>}
      {!auth.userId && <ErrorText>Must be logged in to comment.</ErrorText>}
    </AddCommentContainer>
  );
};

export default AddComment;
