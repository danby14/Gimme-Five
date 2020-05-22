import React, { useState } from 'react';
import { CloseO } from '../styled/CloseO';
import { Inspiration, InfoBox, RandomButton } from '../styled/InspirationStyles';

const RandomTopic = ({ add, subtract }) => {
  const topics = [
    'age',
    'animals',
    'annoying noises',
    'bikes',
    'boats',
    'body parts',
    'books',
    'breakfast',
    'career',
    'cars',
    'clothes',
    'coffee',
    'doctors',
    'dreams',
    'education',
    'entertainment',
    'family',
    'fitness',
    'food',
    'friends',
    'gambling',
    'health',
    'holidays',
    'kids',
    'laundry',
    'lazy',
    'mental health',
    'music',
    'ocean',
    'personal hygeine',
    'philosophy',
    'photography',
    'race',
    'relationships',
    'religion',
    'robots',
    'seasons',
    'sleep',
    'sports',
    'technology',
    'time',
    'transportation',
    'tv/movies',
    'vacation',
    'video games',
    'weather',
    'work',
  ];
  const [randomTopic, setRandomTopic] = useState('');
  const [showRandomTopic, setShowRandomTopic] = useState('');

  const handleSubmit = async () => {
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    let randomIdx = randomNum(0, topics.length);
    setRandomTopic(topics[randomIdx]);
    setShowRandomTopic(true);
  };

  function hideRandomTopic() {
    setShowRandomTopic(!showRandomTopic);
  }

  return (
    <Inspiration>
      <RandomButton add={add} subtract={subtract} handleSubmit={handleSubmit}>
        Random Topic
      </RandomButton>
      {showRandomTopic && (
        <InfoBox>
          {randomTopic}
          <span className='topRight'>
            <CloseO onClick={hideRandomTopic} />
          </span>
        </InfoBox>
      )}
    </Inspiration>
  );
};

export default RandomTopic;
