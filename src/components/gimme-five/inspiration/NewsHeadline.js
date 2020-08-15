import React, { useState } from 'react';
import { CloseO } from '../../styled/CloseO';
import { Inspiration, InfoBox, RandomButton } from '../../styled/InspirationStyles';

const NewsHeadline = ({ add, subtract }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [newsHeadline, setNewsHeadline] = useState('');
  const [showNewsHeadline, setShowNewsHeadline] = useState('');

  const handleSubmit = async () => {
    try {
      let response = await fetch(`${BASE_URL}/random/headline`);
      let data = await response.text();
      if (!response.ok) throw response.statusText;
      setNewsHeadline(data);
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
