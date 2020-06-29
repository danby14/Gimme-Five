import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import styled from 'styled-components/macro';

const Card = styled.div`
  height: 10%;
  width: 100%;
  background-color: rgb(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 1.3rem 1rem 0.3rem 1rem;
  border-radius: 0.5rem;
  box-shadow: inset 0 0 3px #000000;
  font-size: 1.2rem;
  text-align: center;
`;

const Title = styled.div`
  color: darkblue;
`;
const Created = styled.div`
  text-align: right;
  color: grey;
  font-size: 0.9rem;
`;

const TitleCard = ({ list }) => {
  let when = formatDistanceToNow(new Date(list.created_at), { addSuffix: true });
  return (
    <Card>
      <Title>{list.title}</Title>
      <Created>{when}</Created>
    </Card>
  );
};

export default TitleCard;
