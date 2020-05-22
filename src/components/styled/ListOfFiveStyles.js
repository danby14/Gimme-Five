import styled from 'styled-components/macro';

export const Container = styled.div`
  font-size: 1.2rem;
  width: 99%;

  form {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  textarea {
    padding: 0.5rem;
    height: 2.5rem;
    font-size: 1.4rem;
    width: 100%;
    @media only screen and (min-width: 992px) {
      width: 62%;
      margin-right: 0.75rem;
    }
  }

  ol {
    display: flex;
    flex-direction: column;
  }

  li {
    margin-bottom: 1.5rem;
    word-wrap: break-word;
    margin-left: 2rem;
  }

  .item-container {
    display: flex;
    align-items: center;
  }
`;
