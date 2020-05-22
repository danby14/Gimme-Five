import React, { useState } from 'react';
import { CloseO } from '../styled/CloseO';
import { Inspiration, InfoBox, RandomButton } from '../styled/InspirationStyles';

const RandomWiki = ({ add, subtract }) => {
  const [randomWiki, setRandomWiki] = useState('');
  const [showRandomWiki, setShowRandomWiki] = useState('');

  const handleSubmit = async () => {
    try {
      let response = await fetch(
        `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=random&format=json&rnnamespace=0&rnlimit=1`
      );
      let data = await response.json();
      if (!response.ok) throw response.statusText;
      setRandomWiki(data.query.random[0]);
      setShowRandomWiki(true);
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  function hideRandomWiki() {
    setShowRandomWiki(!showRandomWiki);
  }

  return (
    <Inspiration>
      <RandomButton add={add} subtract={subtract} handleSubmit={handleSubmit}>
        Random Wiki
      </RandomButton>

      {showRandomWiki && (
        <InfoBox>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={`https://en.wikipedia.org//?curid=${randomWiki.id}`}
          >
            {randomWiki.title}
          </a>
          <span className='topRight'>
            <CloseO onClick={hideRandomWiki} />
          </span>
        </InfoBox>
      )}
    </Inspiration>
  );
};

export default RandomWiki;
