import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 1rem;

  @media screen and (min-width: 992px) {
    padding-bottom: 8rem;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Row = styled.div`
  display: flex;
  overflow: auto;

  @media only screen and (max-width: 992px) {
    /* overflow: auto; */
  }
`;

const media = {
  xs: styles => `
  @media only screen and (max-width: 992px) {
    ${styles}
  }
  `,
};

export const Col = styled.div`
  flex: ${props => props.size};
  ${props => props.collapse && media[props.collapse](`display: none`)}
`;
