import styled from 'styled-components/macro';

export const Container = styled.div`
  font-size: 1.2rem;
  width: 99%;
  li:nth-child(odd) {
    background-color: #e4e4e4;
  }

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
    margin-bottom: 1rem;
  }

  li {
    padding: 0.85rem 0;
    padding-left: 0.5rem;
    /* margin-bottom: 1.5rem; */
    word-wrap: break-word;
    margin-left: 1.5rem;
  }

  .item-container {
    display: flex;
    justify-content: space-between;
  }

  .editButtons {
    display: flex;
    align-items: center;
    padding-right: 0.5rem;
  }
  button {
    cursor: grab;
  }
`;
