import React, { useState } from 'react';
import RandomWord from './inspiration/RandomWord';
import RandomWiki from './inspiration/RandomWiki';
import NewsHeadline from './inspiration/NewsHeadline';
import RandomTopic from './inspiration/RandomTopic';
import RandomName from './inspiration/RandomName';
import MagicEightBall from './inspiration/MagicEightBall';
import WhoWhat from './inspiration/WhoWhat';
import AgeGroup from './inspiration/AgeGroup';
// import Scratchpad from './inspiration/Scratchpad';

const IdeaGenerators = ({ startCount }) => {
  const [count, setCount] = useState(startCount);
  if (count < 0) return setCount(7);
  if (count > 7) return setCount(0);
  function addOne() {
    setCount(count + 1);
  }
  function subtractOne() {
    setCount(count - 1);
  }
  return (
    <>
      {count === 0 && <RandomWiki add={addOne} subtract={subtractOne} />}
      {count === 1 && <NewsHeadline add={addOne} subtract={subtractOne} />}
      {count === 2 && <RandomTopic add={addOne} subtract={subtractOne} />}
      {count === 3 && <RandomWord add={addOne} subtract={subtractOne} />}
      {count === 4 && <RandomName add={addOne} subtract={subtractOne} />}
      {count === 5 && <AgeGroup add={addOne} subtract={subtractOne} />}
      {count === 6 && <WhoWhat add={addOne} subtract={subtractOne} />}
      {count === 7 && <MagicEightBall add={addOne} subtract={subtractOne} />}

      {/* <Scratchpad /> */}
    </>
  );
};

export default IdeaGenerators;
