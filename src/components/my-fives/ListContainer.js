import React from 'react';

import ListVotes from './ListVotes';
import Comments from '../shared/Comments';
import DeleteList from './DeleteList';

const ListContainer = ({ list, update }) => {
  if (list) {
    return (
      <>
        {list && (
          <>
            <div className='listHeader'>
              <h2>{list.title}</h2>
            </div>
            <ol>
              {list.five.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ol>
            <DeleteList list={list} update={update} />
            <div>
              <h2>Votes</h2>
              <ListVotes votes={list.votes} />
            </div>
            <div>
              <h2>Comments</h2>
              {list.comments &&
                list.comments.map(comment => (
                  <Comments key={list.comments[0].id} comment={comment} />
                ))}
            </div>
          </>
        )}
      </>
    );
  } else {
    return <div>You have not reached the max amount of fives yet.</div>;
  }
};

export default ListContainer;
