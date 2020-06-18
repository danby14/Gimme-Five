import React, { useState } from 'react';
import { Button } from '../../styled/Button';

const Scratchpad = () => {
  const [texty, setTexty] = useState('');
  const [showScratchpad, setShowscratchpad] = useState(false);

  function handleChange(e) {
    setTexty(e.target.value);
  }

  function handleClick() {
    setShowscratchpad(!showScratchpad);
  }

  return (
    <div className='inspiration'>
      <Button onClick={handleClick}>Scratchpad</Button>
      {showScratchpad && <textarea value={texty} onChange={handleChange}></textarea>}
    </div>
  );
};

export default Scratchpad;
