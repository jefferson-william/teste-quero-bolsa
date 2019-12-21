import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'
import colors from '~/styles/colors'

export const Menu = styled.nav`
  width: 100%;
  text-align: right;
  background-color: ${colors.blue.primary};
  i {
    margin-left: 8px;
    font-size: 12px;
    color: #fff;
  }
  input {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 40px;
    appearance: none;
    &:checked ~ ul {
      display: block;
      width: 100%;
    }
  }
  ul {
    flex-direction: column;
    display: none;
    margin: 8px 0 16px;
    text-align: center;
    list-style-type: none;
    a {
      width: 100%;
      &:hover,
      &:active {
        background: ${colors.blue.secondary};
      }
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    input,
    .menu__action {
      display: none;
    }
    ul {
      flex-direction: row;
      display: flex;
      margin: 0;
      a {
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 14px;
        font-size: 14px;
      }
    }
  }
`
