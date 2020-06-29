import styled from 'styled-components/macro';

export const AppContainer = styled.div`
  display: block;
  margin: 0 auto;
  height: 100%;

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const MainContainer = styled.div`
  padding: 0 1rem;

  @media (min-width: 992px) {
    /* height: 100vh; */
  }
`;

export const MainHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  padding-top: 1.5rem;
  padding-right: 1.25rem;
  margin-bottom: 1.25rem;
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
  margin: 1rem 0 auto;

  @media (min-width: 992px) {
    margin: 0 auto;
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
