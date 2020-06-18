import React from 'react';

const ListComments = ({ comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      {comments &&
        comments.map(comment => (
          <React.Fragment key={comment.id}>
            <p>by: {comment.commentor}</p>
            <p>date: {comment.date}</p>
            <p>{comment.comment}</p>
          </React.Fragment>
        ))}
    </div>
  );
};

export default ListComments;
