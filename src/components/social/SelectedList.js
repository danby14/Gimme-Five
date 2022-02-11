import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Comments from '../shared/Comments';
import { MainHeading } from '../styled/AppStyles';
import { ListHolder } from '../styled/ListStyles';
import AddComment from './AddComment';
import Vote from './Vote';
import { CircleSpinner } from '../shared/CircleSpinner';

const List = ({ match }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(`${BASE_URL}/lists/get/list/${id}`);
        let data = await response.json();
        setList(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };
    fetchList();
  }, [id, count, BASE_URL]);

  const forceRerender = () => {
    setCount(count + 1);
  };

  const handleClick = () => {
    navigate(-1);
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
    return <CircleSpinner loading={isLoading} />;
  }
};

export default List;
