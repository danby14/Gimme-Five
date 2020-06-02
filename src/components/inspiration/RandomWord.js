import React, { useState } from 'react';
import { CloseO } from '../styled/CloseO';
import { Inspiration, InfoBox, RandomButton } from '../styled/InspirationStyles';

const RandomWord = ({ add, subtract }) => {
  const [randomWord, setRandomWord] = useState('');
  const [showRandomWord, setShowRandomWord] = useState('');
  const handleSubmit = async () => {
    try {
      // let response = await fetch(`http://localhost:5000/random/word`);
      let response = await fetch(`https://five.danby.me/random/word`);
      let data = await response.text();
      if (!response.ok) throw response.statusText;
      if (!response.ok) throw response.statusText;
      setRandomWord(data);
      setShowRandomWord(true);
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  function hideRandomWord() {
    setShowRandomWord(!showRandomWord);
  }

  return (
    <Inspiration>
      <RandomButton add={add} subtract={subtract} handleSubmit={handleSubmit}>
        Random Word
      </RandomButton>
      {showRandomWord && (
        <InfoBox>
          {randomWord}
          <span className='topRight'>
            <CloseO onClick={hideRandomWord} />
          </span>
        </InfoBox>
      )}
    </Inspiration>
  );
};

export default RandomWord;
