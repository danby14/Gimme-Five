import React from 'react';

import ListOfFive from './ListOfFive';
import IdeaGenerators from './IdeaGenerators';
import { MainHeading, RowOfButtons } from '../styled/AppStyles';

const GimmeFive = () => {
  const width = window.innerWidth;
  function handleClick() {
    const thoughtsList = document.getElementById('list-of-five');
    thoughtsList.classList.toggle('hidden');
  }

  return (
    <>
      <MainHeading onClick={handleClick}>Gimme Five</MainHeading>
      <ListOfFive />
      <RowOfButtons>
        <IdeaGenerators startCount={1} />
        {width > 992 && (
          <>
            <IdeaGenerators startCount={0} />
            <IdeaGenerators startCount={3} />{' '}
          </>
        )}
      </RowOfButtons>
    </>
  );
};

export default GimmeFive;
