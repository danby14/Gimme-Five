import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../context/auth-context';
import { MainHeading } from '../styled/AppStyles';
import ListContainer from './ListContainer';
import ListButtons from './ListButtons';

const MyFives = ({ match }) => {
  const auth = useContext(AuthContext);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [lists, setLists] = useState([]);
  const [activeList, setActiveList] = useState(0);

  let userId = auth.userId;

  useEffect(() => {
    const fetchLists = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(`http://localhost:5000/lists/get/user/${userId}`);
        if (!response.ok) {
          throw new Error('No lists found');
        }
        let data = await response.json();
        setLists(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err.message);
        setIsLoading(false);
      }
    };
    fetchLists();
  }, [userId, count]);

  const forceRerender = () => {
    setCount(count + 1);
  };

  return (
    <>
      <MainHeading>My Fives for User: {auth.userName}</MainHeading>
      <ListButtons lists={lists} setActiveList={setActiveList} />
      <ListContainer list={lists[activeList]} update={forceRerender} />
    </>
  );
};

export default MyFives;
