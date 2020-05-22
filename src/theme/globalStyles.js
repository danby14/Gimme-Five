import { createGlobalStyle } from 'styled-components/macro';
import blocky from './assets/blocky.png';

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
  /* background-image: url(${blocky}); */
  background-color: gainsboro;
  font-family: 'Sanchez', serif;
  /* font-family: 'Montserrat', sans-serif; */
}

.hidden {
  display: none;
}
`;

export default GlobalStyles;
