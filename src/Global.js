import { createGlobalStyle } from 'styled-components';
import Poppins from './Fonts';

const GlobalStyle = createGlobalStyle`
  ${Poppins}
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;