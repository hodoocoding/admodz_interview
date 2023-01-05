import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    color: inherit;
  }


  body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 600px;
  }

  th {
    color: #7d879c;
  }

  html,
  body {
    height: 100%;
  }

  td {
    font-size: 0.8rem;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a {
    text-decoration: none;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  p {
    font-size: 1.4rem !important;
  }
`;

export default GlobalStyle;
