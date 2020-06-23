import React from 'react';
import { CommentBox } from '../styled/CommentStyles';

const Comments = ({ comment }) => {
  return (
    <CommentBox commentor={comment.commentor} timestamp={comment.date}>
      {comment.comment}
    </CommentBox>
  );
};

export default Comments;
