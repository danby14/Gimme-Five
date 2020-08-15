import React, { useState, useContext } from 'react';
import styled from 'styled-components/macro';

import { Button2 } from '../styled/Button';
import { Trash } from '../styled/TrashCan';
import Modal from '../shared/Modal';
import { AuthContext } from '../context/auth-context';

const TrashTalk = styled.div`
  display: inline-block;
  margin: 0.75rem 0 0.45rem 0;
  div {
    display: flex;
    align-items: baseline;
    color: red;
    div {
      cursor: pointer;
      margin-left: 1rem;
    }
  }
`;

const DeleteList = ({ list, update }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [verifyTitle, setVerifyTitle] = useState('');
  const [reqError, setReqError] = useState(null);

  const auth = useContext(AuthContext);

  const modalViewer = () => {
    setVerifyTitle('');
    setReqError(null);
    setShowModal(!showModal);
  };

  function handleVerifyTitleChange(e) {
    setVerifyTitle(e.target.value);
  }

  const removeList = async e => {
    e.preventDefault();
    let listId = list.id;
    // let userData = auth.userId;
    setIsLoading(true);
    if (verifyTitle.trim() === list.title.trim()) {
      try {
        let response = await fetch(`${BASE_URL}/lists/remove/${listId}`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.token,
          },
          // body: JSON.stringify(userData),
        });
        let data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        if (data === 0) throw new Error('List already deleted');

        setVerifyTitle('');
        setReqError(null);
        setIsLoading(false);
        modalViewer();
        update();
      } catch (err) {
        setIsLoading(false);
        console.error(err.message);
        setReqError(err.message);
      }
    } else {
      setIsLoading(false);
      setReqError('Titles did not match');
    }
  };

  return (
    <>
      <TrashTalk>
        <div onClick={modalViewer}>
          <Trash />
          <div>Delete This List</div>
        </div>
      </TrashTalk>
      <Modal
        show={showModal}
        bgColor='#0099cc'
        // onCancel={closeEditor}
        header={`Are you sure you want to delete ${list.title}?`}
        onSubmit={removeList}
        errorMsg={reqError}
        footer={
          <>
            <Button2
              type='submit'
              bgColor='#dc3545'
              color='white'
              loading={isLoading}
              spinColor='white'
            >
              Delete
            </Button2>
            <Button2 onClick={modalViewer} bgColor='' color='#00626e'>
              Close
            </Button2>
          </>
        }
      >
        <label htmlFor='title'>Confirm the title to delete this list:</label>
        <input
          type='text'
          onChange={handleVerifyTitleChange}
          value={verifyTitle}
          placeholder='case-sensitive'
          required
          minLength='5'
        />
        <p className='warning'>
          Warning!! This list along with all of the votes and comments associated with it will be
          lost forever. This action can not be undone.
        </p>
      </Modal>
    </>
  );
};

export default DeleteList;
