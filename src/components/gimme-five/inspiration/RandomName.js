import React, { useState } from 'react';
import { CloseO } from '../../styled/CloseO';
import { Inspiration, InfoBox, RandomButton } from '../../styled/InspirationStyles';

const RandomName = ({ add, subtract }) => {
  const [randomName, setRandomName] = useState('');
  const [showRandomName, setShowRandomName] = useState('');

  const handleSubmit = async () => {
    try {
      let response = await fetch(`https://randomuser.me/api/?inc=name&nat=us`);
      let data = await response.json();
      if (!response.ok) throw response.statusText;
      setRandomName(data.results[0].name);
      setShowRandomName(true);
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  function hideRandomName() {
    setShowRandomName(!showRandomName);
  }

  return (
    <Inspiration>
      <RandomButton add={add} subtract={subtract} handleSubmit={handleSubmit}>
        Random Name
      </RandomButton>
      {showRandomName && (
        <InfoBox>
          {`${randomName.first} ${randomName.last}`}
          <span className='topRight'>
            <CloseO onClick={hideRandomName} />
          </span>
        </InfoBox>
      )}
    </Inspiration>
  );
};

export default RandomName;
