import React from 'react';
import { CommentBox } from '../styled/CommentStyles';
import { formatDistanceToNow } from 'date-fns';

const Comments = ({ comment }) => {
  let when = formatDistanceToNow(new Date(comment.date), { addSuffix: true });
  return (
    <CommentBox commentor={comment.commentor} timestamp={when}>
      {comment.comment}
    </CommentBox>
  );
};

export default Comments;
