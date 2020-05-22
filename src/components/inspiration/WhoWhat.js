import React, { useState } from 'react';
import { CloseO } from '../styled/CloseO';
import { Inspiration, InfoBox, RandomButton } from '../styled/InspirationStyles';

const WhoWhat = ({ add, subtract }) => {
  const options = ['who', 'what', 'why', 'where', 'when', 'how'];
  const [question, setQuestion] = useState('');
  const [showQuestion, setShowQuestion] = useState('');

  const handleSubmit = async () => {
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    let randomIdx = randomNum(0, options.length);
    setQuestion(options[randomIdx]);
    setShowQuestion(true);
  };

  function hideQuestion() {
    setShowQuestion(!showQuestion);
  }

  return (
    <Inspiration>
      <RandomButton add={add} subtract={subtract} handleSubmit={handleSubmit}>
        5 W's
      </RandomButton>
      {showQuestion && (
        <InfoBox>
          {question}
          <span className='topRight'>
            <CloseO onClick={hideQuestion} />
          </span>
        </InfoBox>
      )}
    </Inspiration>
  );
};

export default WhoWhat;
