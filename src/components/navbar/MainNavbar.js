import React, { useContext } from 'react';

import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth-context';

const NavLayout = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 992px) {
    height: 42%;
    width: 75%;
    margin-left: 12.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const StyledLink = styled(Link)`
  color: rgb(255, 255, 255, 0.9);
  text-decoration: none;
`;

const MainNavbar = props => {
  const auth = useContext(AuthContext);
  return (
    <NavLayout>
      <StyledLink to='/'>Gimme Five</StyledLink>
      {auth.isLoggedIn && (
        <>
          <StyledLink to='/myfives'>My 5's</StyledLink>
          <StyledLink to='/social'>Social</StyledLink>
          <StyledLink to='/account'>Account</StyledLink>
          <button onClick={() => auth.logout()}>Sign Out</button>
        </>
      )}
      {!auth.isLoggedIn && (
        <>
          <StyledLink to='/social'>Social</StyledLink>
          <StyledLink to='/auth'>Sign In</StyledLink>
        </>
      )}
    </NavLayout>
  );
};

export default MainNavbar;
