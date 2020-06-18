import React from 'react';
import styled from 'styled-components/macro';

const Card = styled.div`
  height: 10%;
  width: 100%;
  background-color: rgb(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: inset 0 0 3px #000000;
  font-size: 1.2rem;
`;

const TitleCard = ({ list }) => {
  return <Card>{list.title}</Card>;
};

export default TitleCard;
