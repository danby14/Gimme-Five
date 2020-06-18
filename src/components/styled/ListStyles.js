import styled from 'styled-components/macro';

export const ListHolder = styled.div`
  width: 100%;
  margin: 0 auto;

  button {
    padding: 0.3rem;
    margin-top: 0.75rem;
    /* border: none; */
  }

  h2 {
    padding: 1.25rem 0;
  }

  .listHeader {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
  }

  .creator {
    /* padding-left: 1.25rem; */
    font-size: 1.1rem;
    padding-bottom: 1.5rem;
  }

  ol {
    list-style-position: inside;
    font-size: 1.1rem;
    padding-left: 0.25rem;
  }

  li {
    padding-bottom: 0.75rem;
  }
`;
