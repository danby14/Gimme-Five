import React, { useState } from 'react';
import { CloseO } from '../styled/CloseO';
import { Inspiration, InfoBox, RandomButton } from '../styled/InspirationStyles';

const MagicEightBall = ({ add, subtract }) => {
  const eightBall = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes – definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.',
  ];

  const [answer, setAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState('');

  const handleSubmit = async () => {
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    let randomIdx = randomNum(0, eightBall.length);
    setAnswer(eightBall[randomIdx]);
    setShowAnswer(true);
  };

  function hideAnswer() {
    setShowAnswer(!showAnswer);
  }

  return (
    <Inspiration>
      <RandomButton add={add} subtract={subtract} handleSubmit={handleSubmit}>
        Magic 8-ball
      </RandomButton>
      {showAnswer && (
        <InfoBox>
          {answer}
          <span className='topRight'>
            <CloseO onClick={hideAnswer} />
          </span>
        </InfoBox>
      )}
    </Inspiration>
  );
};

export default MagicEightBall;
