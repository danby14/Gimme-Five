import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocal } from '../../hooks/useLocal';

import { AuthContext } from '../context/auth-context';
import Modal from '../shared/Modal';
import { Container } from '../styled/ListOfFiveStyles';
import { Button2 } from '../styled/Button';
import { CloseO } from '../styled/CloseO';
import { Pen } from '../styled/Pen';

const ListOfFive = () => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [reqError, setReqError] = useState(null);
  const [thought, setThought] = useState('');
  const [title, setTitle] = useState('');
  const [oldThought, setOldThought] = useState({});
  const [thoughts, setThoughts] = useLocal([], 'thoughts');
  // const [thoughts, setThoughts] = useState([]);
  const inputRef = useRef(null);
  const [editModal, setEditModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [disabled, setDisabled] = useState(false);

  let userId = auth.userId;
  let history = useHistory();

  const openEditor = i => {
    setEditModal(true);
    let oldValue = thoughts[i];
    setOldThought({ indx: i, val: oldValue });
  };

  const closeEditor = () => setEditModal(false);

  const openSubmitter = () => {
    setShowSubmitModal(true);
  };

  const closeSubmitter = () => {
    setShowSubmitModal(false);
    setReqError(null);
    setDisabled(false);
  };

  function handleEditChange(e) {
    setOldThought({ indx: oldThought.indx, val: e.target.value });
  }

  function handleThoughtSubmit(e) {
    e.preventDefault();
    if (!thought) return;
    setThoughts([...thoughts, thought]);
    setThought('');
    inputRef.current.focus();
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const newThoughts = [...thoughts];
    newThoughts[oldThought.indx] = oldThought.val;
    setThoughts(newThoughts);
    closeEditor();
  }

  function removeItem(id) {
    let thoughtEdits = thoughts.filter((x, i) => i !== id);
    setThoughts(thoughtEdits);
  }

  const gatherThoughts = async e => {
    e.preventDefault();
    let submittedData = { title: title, five: thoughts.slice(0, 5) };
    setIsLoading(true);
    try {
      let response = await fetch(`http://localhost:5000/lists/post/user/${userId}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submittedData),
      });
      let data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setThoughts([]);
      setIsLoading(false);
      closeSubmitter();
      history.push('/myfives');
    } catch (err) {
      setReqError(err.message);
      setDisabled(true);
      setIsLoading(false);
      console.error(err.message);
    }
  };

  return (
    <Container id='list-of-five'>
      <form onSubmit={handleThoughtSubmit}>
        <textarea
          ref={inputRef}
          onChange={e => setThought(e.target.value)}
          value={thought}
          type='text'
        />
        <Button2 type='submit'>Submit</Button2>
      </form>
      <ol>
        {thoughts.map((x, i) => (
          <li key={i}>
            <div className='item-container'>
              <span>{x}</span>
              <div className='editButtons'>
                <CloseO onClick={() => removeItem(i)} margin='1rem' />
                <Pen onClick={() => openEditor(i)} />
              </div>
            </div>
          </li>
        ))}
      </ol>
      {userId && thoughts.length >= 5 && <Button2 onClick={openSubmitter}>Save Five</Button2>}
      {!userId && (
        <div>
          <p>
            Have fun making your five, but only logged in users can save their fives for voting.
          </p>
        </div>
      )}

      <Modal
        show={editModal}
        // onCancel={closeEditor}
        header='Edit'
        onSubmit={handleEditSubmit}
        footer={
          <>
            <Button2 type='submit' bgColor='#098d9c' color='white'>
              Submit
            </Button2>
            <Button2 onClick={closeEditor} bgColor='' color='#00626e'>
              Cancel
            </Button2>
          </>
        }
      >
        <textarea onChange={handleEditChange} value={oldThought.val} type='text' />
      </Modal>
      <Modal
        show={showSubmitModal}
        // onCancel={closeEditor}
        header='Save and Submit for Voting'
        onSubmit={gatherThoughts}
        errorMsg={reqError}
        footer={
          <>
            <Button2 type='submit' bgColor='#098d9c' color='white' disabled={disabled}>
              Submit
            </Button2>
            <Button2 onClick={closeSubmitter} bgColor='' color='#00626e'>
              Cancel
            </Button2>
          </>
        }
      >
        <label htmlFor='title'>
          Title:
          <input
            onChange={e => setTitle(e.target.value)}
            value={title}
            id='title'
            name='title'
            pattern='^\S.*[^\s]$'
            title='Must not start or end with a space'
            type='text'
            required
            minLength='5'
          />
        </label>
        <ol>
          {thoughts.slice(0, 5).map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ol>
      </Modal>
    </Container>
  );
};

export default ListOfFive;
