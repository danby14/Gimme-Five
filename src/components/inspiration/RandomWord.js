import React, { useState } from 'react';
import { CloseO } from '../styled/CloseO';
import { Inspiration, InfoBox, RandomButton } from '../styled/InspirationStyles';

const RandomWord = ({ add, subtract }) => {
  const [randomWord, setRandomWord] = useState('');
  const [showRandomWord, setShowRandomWord] = useState('');
  const handleSubmit = async () => {
    try {
      let response = await fetch(`https://random-word-api.herokuapp.com/word?number=1`);
      let data = await response.json();
      if (!response.ok) throw response.statusText;
      setRandomWord(data[0]);
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
