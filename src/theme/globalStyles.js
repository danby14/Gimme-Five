import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`

html {
  height: 100%;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #f8f9fa;
  font-family: 'Sanchez', serif;
  /* font-family: 'Montserrat', sans-serif; */
}

.hidden {
  display: none;
}
`;

export default GlobalStyles;
