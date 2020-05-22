import React, { useState } from 'react';
import { CloseO } from '../styled/CloseO';
import { Inspiration, InfoBox, RandomButton } from '../styled/InspirationStyles';

const NewsHeadline = ({ add, subtract }) => {
  const [newsHeadline, setNewsHeadline] = useState('');
  const [showNewsHeadline, setShowNewsHeadline] = useState('');
  const NEWS_TEST = process.env.REACT_APP_NEWS_KEY;

  const handleSubmit = async () => {
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    let randomIdx = randomNum(0, 20);
    try {
      let response = await fetch(
        `http://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_TEST}`
      );
      let data = await response.json();
      if (!response.ok) throw response.statusText;
      console.log('data', data);
      setNewsHeadline(data.articles[randomIdx].title);
      setShowNewsHeadline(true);
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  function hideNewsHeadline() {
    setShowNewsHeadline(!showNewsHeadline);
  }

  return (
    <Inspiration>
      <RandomButton add={add} subtract={subtract} handleSubmit={handleSubmit}>
        News Headline
      </RandomButton>
      {showNewsHeadline && (
        <InfoBox>
          {newsHeadline}
          <span className='topRight'>
            <CloseO onClick={hideNewsHeadline} />
          </span>
        </InfoBox>
      )}
    </Inspiration>
  );
};

export default NewsHeadline;
