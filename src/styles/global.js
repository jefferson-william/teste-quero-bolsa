import { createGlobalStyle } from 'styled-components'
import colors from '~/styles/colors'

export default createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    display: table;
  }
  body {
    display: table-cell;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  body {
    font-family: 'Proxima Nova', Arial, Helvetica, 'Open Sans', sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a, button {
    cursor: pointer;
  }
  a {
    font-weight: 500;
    text-decoration: none;
    color: ${colors.blue.secondary};
  }
`
