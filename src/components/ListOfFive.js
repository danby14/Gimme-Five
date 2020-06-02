import React, { useState, useRef } from 'react';

import Modal from './Modal';
import { Container } from './styled/ListOfFiveStyles';
import { Button2 } from './styled/Button';
import { CloseO } from './styled/CloseO';
import { Pen } from './styled/Pen';

const ListOfFive = () => {
  const [thought, setThought] = useState('');
  const [oldThought, setOldThought] = useState({});
  const [thoughts, setThoughts] = useState([]);
  const inputRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const openEditor = i => {
    setShowModal(true);
    let oldValue = thoughts[i];
    setOldThought({ indx: i, val: oldValue });
  };

  const closeEditor = () => setShowModal(false);

  function handleThoughtChange(e) {
    setThought(e.target.value);
  }
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

  return (
    <Container id='list-of-five'>
      <form onSubmit={handleThoughtSubmit}>
        <textarea ref={inputRef} onChange={handleThoughtChange} value={thought} type='text' />
        <Button2 type='submit'>Submit</Button2>
      </form>
      <ol>
        {thoughts.map((x, i) => (
          <li key={i}>
            <div className='item-container'>
              <span>{x}</span>
              <CloseO onClick={() => removeItem(i)} margin='1rem' />
              <Pen onClick={() => openEditor(i)} />
            </div>
          </li>
        ))}
      </ol>
      <Modal
        show={showModal}
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
    </Container>
  );
};

export default ListOfFive;
