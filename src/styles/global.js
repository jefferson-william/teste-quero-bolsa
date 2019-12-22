import { createGlobalStyle } from 'styled-components'
import colors from '~/styles/colors'
import { breakpoints } from '~/styles/metrics'

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
    color: ${colors.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a, button, [role=button] {
    cursor: pointer;
  }
  a {
    font-weight: 500;
    text-decoration: none;
    &:hover {
      color: ${colors.blue.primary};
    }
  }
  a, i {
    color: ${colors.blue.secondary};
  }
  hr {
    width: 100%;
    border-top: 1px solid ${colors.gray.primary};
  }
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  b, strong, button {
    font-family: 'Proxima Nova Bold';
  }
  .fal {
    font-family: 'Font Awesome 5 Pro';
    font-size: 24px;
  }
  .fab {
    font-family: 'Font Awesome Brands Regular';
    font-size: 24px;
  }
  .fas {
    font-family: 'Font Awesome Solid Regular';
    font-size: 24px;
  }
  .container {
    margin: 0 auto;
    padding: 0 16px;
  }
  @media (min-width: ${breakpoints.md}) {
    .container {
      max-width: 750px;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    .container {
      max-width: 970px;
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    .container {
      max-width: 1170px;
    }
  }
`
