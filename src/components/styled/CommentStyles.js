import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem;
  :nth-child(even) {
    background-color: #e4e4e4;
  }
  border: 1px solid #e4e4e4;
`;

const Comment = styled.div`
  padding-top: 0.25rem;
`;

const UserAndTime = styled.div`
  display: flex;
  font-size: 0.85rem;
  /* padding: 0.5rem; */
  p {
    color: blue;
    padding-right: 0.5rem;
  }
`;

// const Commentor = styled.p``;

export const CommentBox = props => {
  return (
    <Container>
      <UserAndTime>
        <p>{props.commentor}</p>
        <span>{props.timestamp}</span>
      </UserAndTime>
      <Comment>{props.children}</Comment>
    </Container>
  );
};
