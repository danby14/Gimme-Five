import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { MainHeading } from '../styled/AppStyles';
import { ListHolder } from '../styled/ListStyles';
import Vote from './Vote';
import Comments from '../shared/Comments';
import AddComment from './AddComment';

const List = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(`http://localhost:5000/lists/get/list/${id}`);
        let data = await response.json();
        setList(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };
    fetchList();
  }, [id, count]);

  const forceRerender = () => {
    setCount(count + 1);
  };

  const handleClick = () => {
    history.goBack();
  };

  if (!isLoading && list?.five) {
    return (
      <ListHolder>
        <div className='listHeader'>
          <MainHeading>{list.title}</MainHeading> <div className='creator'>by: {list.creator}</div>
        </div>
        <ol>
          {list.five.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ol>
        <div>
          <h2>Vote</h2>
          {/* if votes.voter_id includes auth.id show results bar graph */}
          <Vote votes={list.votes} listId={list.id} update={forceRerender} />
        </div>
        <div>
          <h2>Comments</h2>
          {list.comments &&
            list.comments.map(comment => <Comments key={comment.id} comment={comment} />)}
          <AddComment listId={list.id} update={forceRerender} />
        </div>
        <button onClick={handleClick}>Back To All Lists</button>
      </ListHolder>
    );
  } else {
    return <div>loading..</div>;
  }
};

export default List;
