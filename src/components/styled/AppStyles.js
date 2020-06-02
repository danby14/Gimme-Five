import styled from 'styled-components/macro';

export const AppContainer = styled.div`
  display: block;
  margin: 0 auto;
  height: 100%;

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const Navbar = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  background-color: #343a40;
  color: rgb(255, 255, 255, 0.9);
  width: 100%;
  padding: 0.875rem 1.5rem;
  justify-content: space-between;
  /* z-index: 1000; */

  @media (min-width: 992px) {
    min-width: 264px;
    width: 264px;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1.5rem;
  }
`;

export const MainContainer = styled.div`
  padding: 0 1rem;

  @media (min-width: 992px) {
    /* height: 100vh; */
  }
`;

export const MainHeading = styled.h1`
  font-weight: 500;
  padding-top: 1.5rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1.25px;
  cursor: grab;
  user-select: none;

  @media (min-width: 992px) {
    padding-top: 2rem;
  }
`;

export const RowOfButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 992px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100vw - 264px);
    left: 264px;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
  }
`;
