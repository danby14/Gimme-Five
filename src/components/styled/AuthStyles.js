import styled from 'styled-components/macro';

export const Checkbox = styled.input.attrs(props => ({
  type: 'checkbox',
}))`
  margin-left: 1.25rem;
  vertical-align: middle;
`;

export const AuthContainer = styled.div`
  width: 300px;
  font-family: 'Muli', sans-serif;
  form {
    div {
      margin-top: 0.25rem;
      margin-bottom: 1.25rem;
      p {
        color: red;
      }
      label {
        font-size: 0.875rem;
        font-weight: bold;
      }
      div {
        input {
          font-size: 1rem;
          line-height: 1.25rem;
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #dae1f5;
          border-radius: 5px;
        }
      }
    }
  }

  .submitter {
    font-family: 'Muli', sans-serif;
    width: 100%;
    padding: 0.75rem 0;
    margin-top: 0.6rem;
    color: #ffffff;
    font-size: 1rem;
    line-height: 20px;
    text-align: center;
    background-color: #10182f;
    border-radius: 5px;
    cursor: pointer;
  }
  .hasLink {
    font-size: 0.875rem;
    text-align: center;
    margin-top: 2.25rem;
    button {
      cursor: pointer;
      font-size: 0.875rem;
      background: none;
      color: blue;
      border: none;
    }
  }
`;
