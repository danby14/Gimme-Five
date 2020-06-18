import React, { useState } from 'react';

import { Button2 } from '../styled/Button';
import Modal from '../shared/Modal';

const RemoveList = ({ list, update }) => {
  const [showModal, setShowModal] = useState(false);
  const [verifyTitle, setVerifyTitle] = useState('');
  const [reqError, setReqError] = useState(null);

  const modalViewer = () => {
    setVerifyTitle('');
    setReqError(null);
    setShowModal(!showModal);
  };

  function handleVerifyTitleChange(e) {
    setVerifyTitle(e.target.value);
  }

  const deleteList = async e => {
    e.preventDefault();
    let listId = list.id;
    if (verifyTitle.trim() === list.title.trim()) {
      try {
        let userData = { userId: 1 };
        let response = await fetch(`http://localhost:5000/lists/remove/${listId}`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
        let data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        if (data === 0) throw new Error('List already deleted');

        setVerifyTitle('');
        setReqError(null);
        update();
        modalViewer();
      } catch (err) {
        console.error(err.message);
        setReqError(err.message);
      }
    } else {
      setReqError('Titles did not match');
    }
  };

  return (
    <>
      <button onClick={modalViewer}>Delete this list</button>
      <Modal
        show={showModal}
        bgColor='#0099cc'
        // onCancel={closeEditor}
        header={`Are you sure you want to delete ${list.title}?`}
        onSubmit={deleteList}
        errorMsg={reqError}
        footer={
          <>
            <Button2 type='submit' bgColor='#dc3545' color='white'>
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

export default RemoveList;
