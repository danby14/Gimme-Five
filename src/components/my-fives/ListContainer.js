import React from 'react';

import ListVotes from './ListVotes';
import ListComments from './ListComments';
import RemoveList from './RemoveList';

const ListContainer = ({ list, update }) => {
  if (list) {
    return (
      <>
        {list && (
          <div>
            <h3>{list.title}</h3>
            <ul>
              {list.five.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
            <ListVotes votes={list.votes} />
            <ListComments comments={list.comments} />
            <RemoveList list={list} update={update} />
          </div>
        )}
      </>
    );
  } else {
    return <div>You have not reached the max amount of lists yet.</div>;
  }
};

export default ListContainer;
