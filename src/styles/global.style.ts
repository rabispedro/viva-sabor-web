import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    body, #root {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;
      min-height: 100vh;
      background: ${({ theme }) => theme.colors.background.medium};
    }

    body {
      font-family:'Montserrat','Bebas Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${({ theme }) => theme.colors.background.medium};
    }

		a {
      text-decoration: none;
    }

    li {
      list-style: none;
    }

    button {
      cursor: pointer;
      border: none;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
	}
`;
