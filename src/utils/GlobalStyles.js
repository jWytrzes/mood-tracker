import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

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

    @media (min-width: 768px) {
      background-color: ${({ theme }) => theme.lightGrey};
    }
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
