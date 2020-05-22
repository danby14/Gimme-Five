import React, { useState } from 'react';
import { CloseO } from '../styled/CloseO';
import { Inspiration, InfoBox, RandomButton } from '../styled/InspirationStyles';

const AgeGroup = ({ add, subtract }) => {
  const options = [
    '0',
    '1-4',
    '5-10',
    '11-13',
    '14-18',
    '19-25',
    '26-29',
    '30-39',
    '40-49',
    '50-65',
    '66-75',
    '75+',
  ];
  const [ages, setAges] = useState('');
  const [showAges, setShowAges] = useState('');

  const handleSubmit = async () => {
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    let randomIdx = randomNum(0, options.length);
    setAges(options[randomIdx]);
    setShowAges(true);
  };

  function hideAges() {
    setShowAges(!showAges);
  }

  return (
    <Inspiration>
      <RandomButton add={add} subtract={subtract} handleSubmit={handleSubmit}>
        Age Group
      </RandomButton>
      {showAges && (
        <InfoBox>
          {`${ages} years old`}

          <span className='topRight'>
            <CloseO onClick={hideAges} />
          </span>
        </InfoBox>
      )}
    </Inspiration>
  );
};

export default AgeGroup;
