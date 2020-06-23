import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSession } from '../../hooks/custom';
import { MainHeading } from '../styled/AppStyles';
import TitleCard from './TitleCard';

const ViewAllLists = ({ match }) => {
  const [currentPage, setCurrentPage] = useSession(1, 'currentPage');
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // no point to store lists in localStorage until you can get the useEffect to not run if it has the current list for that page already in it.
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const fetchLists = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(`http://localhost:5000/lists/get/page/${currentPage}`);
        let data = await response.json();
        setLists(data.data);
        setTotalPages(data.pagination.lastPage);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };
    fetchLists();
  }, [currentPage]);

  const changePage = operator => {
    if (operator === 'add' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }

    if (operator === 'subtract' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <MainHeading>All Users Lists</MainHeading>
      Browse other users submissions and vote for your favorites.
      {!isLoading &&
        lists &&
        lists.map(list => (
          <div key={list.id}>
            <Link to={`${match.url}/${list.id}`}>
              <TitleCard list={list} />
            </Link>
          </div>
        ))}
      <button onClick={() => changePage('subtract')}>back</button>
      {currentPage} of {totalPages}
      <button onClick={() => changePage('add')}>next</button>
    </div>
  );
};

export default ViewAllLists;
