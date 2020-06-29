import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { CircleSpinner } from '../shared/CircleSpinner';
import { useSession } from '../../hooks/custom';
import { MainHeading } from '../styled/AppStyles';
import { ChevronLeft, ChevronRight } from '../styled/Chevron2';
import TitleCard from './TitleCard';

const Link2 = styled(Link)`
  text-decoration: none;
`;

const Navigation = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  .align {
    margin: 0 1rem;
  }
`;

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
            <Link2 to={`${match.url}/${list.id}`}>
              <TitleCard list={list} />
            </Link2>
          </div>
        ))}
      <CircleSpinner loading={isLoading} />
      <Navigation>
        <ChevronLeft onClick={() => changePage('subtract')} scale='1.1' />
        <div className='align'>
          {currentPage} of {totalPages}
        </div>
        <ChevronRight onClick={() => changePage('add')} scale='1.1' />
      </Navigation>
    </div>
  );
};

export default ViewAllLists;
