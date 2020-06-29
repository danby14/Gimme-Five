import React from 'react';
import styled from 'styled-components/macro';
import Burger from './Burger';

export const Navbar = styled.div`
  position: sticky;
  top: 0;
  background-color: #343a40;
  color: rgb(255, 255, 255, 0.9);
  width: 100%;
  height: 58px;
  padding: 0 20px;
  .logo {
    font-size: 1.5rem;
    padding: 14px 0;
  }
  z-index: 10;

  @media (min-width: 992px) {
    min-width: 264px;
    width: 264px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 8rem;
    padding-left: 60px;
    .logo {
      margin: 32px 0;
    }
  }
`;

const MainNavbar = props => {
  return (
    <Navbar>
      <div className='logo'>\o/</div>
      <Burger />
    </Navbar>
  );
};

export default MainNavbar;
