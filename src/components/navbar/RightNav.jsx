import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth-context';

const StyledLink = styled(Link)`
  color: rgb(255, 255, 255, 0.9);
  text-decoration: none;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  li {
    padding: 22px 0;
  }
  button {
    padding: 0.5rem;
    border-radius: 5px;
  }
  @media (max-width: 992px) {
    li {
      padding: 18px 20px;
    }
    flex-flow: column nowrap;
    background-color: #343a40;

    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 95%;
    /* width: 270px; */
    padding-top: 3.5rem;
    transition: transform 0.1s ease-in-out;
    li {
      color: rgb(255, 255, 255, 0.9);
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  const auth = useContext(AuthContext);
  const openClose = () => {
    setOpen(!open);
  };
  return (
    <Ul open={open}>
      <li>
        <StyledLink to='/' onClick={openClose}>
          Gimme Five
        </StyledLink>
      </li>

      {auth.isLoggedIn && (
        <>
          <li>
            <StyledLink to='/myfives' onClick={openClose}>
              My 5's
            </StyledLink>
          </li>
          <li>
            <StyledLink to='/social' onClick={openClose}>
              Social
            </StyledLink>
          </li>
          <li>
            <StyledLink to='/account' onClick={openClose}>
              Account
            </StyledLink>
          </li>
          <li>
            <button onClick={() => auth.logout()}>Sign Out</button>
          </li>
        </>
      )}
      {!auth.isLoggedIn && (
        <>
          <li>
            <StyledLink to='/social' onClick={openClose}>
              Social
            </StyledLink>
          </li>
          <li>
            <StyledLink to='/auth' onClick={openClose}>
              Sign In
            </StyledLink>
          </li>
        </>
      )}
    </Ul>
  );
};

export default RightNav;
