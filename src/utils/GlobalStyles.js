import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 14px;
    font-size: 1.4rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.textPrimary};
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  button, input, textarea {
    font-family: inherit;
  }
`;

export default GlobalStyle;
