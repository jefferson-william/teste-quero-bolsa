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
  b, strong, button, label {
    font-weight: bold;
  }
  input.checkbox {
    position: relative;
    top: -1px;
    width: 16px;
    height: 16px;
    border: 1px solid ${colors.black};
    appearance: none;
    border-radius: 2px;
    &:checked {
      border-color: ${colors.blue.primary};
      background: ${colors.blue.primary};
    }
    &:after {
      margin: 0 0 2px 2px;
      font-family: 'Font Awesome Solid Regular';
      color: #fff;
      font-size: 10px;
      content: '\f00c';
    }
  }
  .button {
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 1px solid ${colors.blue.secondary};
    padding: 0 16px;
    line-height: 48px;
    font-size: 16px;
    color: ${colors.blue.secondary};
    background: #fff;
    & + .button {
      margin-left: 16px;
    }
    &:disabled {
      border-color: ${colors.gray.secondary};
      color: ${colors.gray.secondary};
      background: ${colors.gray.primary};
    }
  }
  .button--submit {
    border: 1px solid ${colors.yellow.secondary};
    color: ${colors.black};
    background: ${colors.yellow.primary};
  }
  .input {
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 1px solid ${colors.gray.secondary};
    padding: 8px 16px;
    margin-top: 8px;
    color: ${colors.black};
    background: #fff;
    appearance: none;
    &,
    &::placeholder {
      font-family: 'Proxima Nova';
      font-size: 16px;
    }
  }
  label.select {
    position: relative;
    &:before {
      position: absolute;
      top: 42px;
      right: 0;
      display: inline-block;
      width: 24px;
      height: 24px;
      font-family: 'Font Awesome Solid Regular';
      color: ${colors.black};
      font-size: 12px;
      content: '\f078';
      z-index: 1;
      pointer-events: none;
    }
  }
  select.select {
    padding-right: 32px;
    &.select--no-selected {
      color: ${colors.gray.secondary};
    }
  }
  .fal {
    font-family: 'Font Awesome Light Regular';
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
  .input-range {
    width: 96%;
    .input-range__track {
      background: ${colors.gray.secondary};
    }
    .input-range__track--active {
      background: ${colors.blue.primary};
    }
    .input-range__slider {
      width: 1.5rem;
      height: 1.5rem;
      border: 2px solid ${colors.blue.primary};
      margin-top: -0.88rem;
      margin-left: -1rem;
      background: #fff;
    }
  }
  @media (min-width: ${breakpoints.md}) {
    .container {
      max-width: 750px;
    }
    .button {
      height: 32px;
      line-height: 32px;
      padding: 0 16px;
      font-size: 13px;
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
