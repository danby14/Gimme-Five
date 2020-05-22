import React, { useState, useRef } from 'react';

import { Container } from './styled/ListOfFiveStyles';
import { Button2 } from './styled/Button';
import { CloseO } from './styled/CloseO';
import { Pen } from './styled/Pen';

const ListOfFive = () => {
  const [thought, setThought] = useState('');
  const [thoughts, setThoughts] = useState([]);
  const inputRef = useRef(null);

  function handleChange(e) {
    setThought(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!thought) return;
    setThoughts([...thoughts, thought]);
    setThought('');
    inputRef.current.focus();
  }

  function editThought(i) {
    let oldValue = thoughts.find((notUsed, index) => index === i);
    let newValue = prompt('', oldValue);
    if (newValue) {
      const newThoughts = [...thoughts];
      newThoughts[i] = newValue;
      setThoughts(newThoughts);
    }
  }

  function removeItem(id) {
    let thoughtEdits = thoughts.filter((x, i) => i !== id);
    setThoughts(thoughtEdits);
  }

  return (
    <Container id='list-of-five'>
      <form onSubmit={handleSubmit}>
        <textarea ref={inputRef} onChange={handleChange} value={thought} type='text' />
        <Button2 type='submit'>Submit</Button2>
      </form>
      <ol>
        {thoughts.map((x, i) => (
          <li key={i}>
            <div className='item-container'>
              <span>{x}</span>
              <CloseO onClick={() => removeItem(i)} margin='1rem' />
              <Pen onClick={() => editThought(i)} />
            </div>
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default ListOfFive;
