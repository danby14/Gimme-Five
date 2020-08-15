import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../context/auth-context';
import { ListHolder } from '../styled/ListStyles';
import { MainHeading } from '../styled/AppStyles';
import ListsRemaining from './ListsRemaining';
import ListContainer from './ListContainer';
import ListSelector from './ListSelector';
import { CircleSpinner } from '../shared/CircleSpinner';

const MyFives = ({ match }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const auth = useContext(AuthContext);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [lists, setLists] = useState([]);
  const [activeList, setActiveList] = useState(0);

  let userId = auth.userId;

  const authHeader = 'Bearer ' + auth.token;

  useEffect(() => {
    const fetchLists = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(`${BASE_URL}/lists/get/user/${userId}`, {
          headers: {
            Authorization: authHeader,
          },
        });
        if (!response.ok) {
          throw new Error('No lists found');
        }
        let data = await response.json();
        setLists(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err.message);
        setLists([]);
        setIsLoading(false);
      }
    };
    fetchLists();
  }, [userId, count, authHeader, BASE_URL]);

  const forceRerender = () => {
    setCount(count + 1);
  };

  return (
    <ListHolder>
      <div className='listHeader'>
        <MainHeading>My Fives</MainHeading>
        <div className='creator'>by: {auth.userName}</div>
      </div>
      {lists.length > 0 && <ListSelector lists={lists} lid={activeList} setLid={setActiveList} />}
      {!isLoading && <ListsRemaining listsUsed={lists.length} />}
      <ListContainer list={lists[activeList]} update={forceRerender} />
      <CircleSpinner loading={isLoading} />
    </ListHolder>
  );
};

export default MyFives;
