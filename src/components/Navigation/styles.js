import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'
import colors from '~/styles/colors'

export const Navigation = styled.nav`
  background-color: ${colors.blue.primary};
  a {
    display: inline-block;
    padding: 12px 0;
    font-family: 'Proxima Nova Bold';
    font-size: 16px;
    color: #fff;
  }
  .navigation__container {
    position: relative;
    justify-content: flex-end;
    display: flex;
  }
  .navigation__account {
    position: absolute;
    top: 0;
    left: 16px;
    &:hover {
      color: ${colors.black};
    }
  }
  @media (min-width: ${breakpoints.md}) {
    a {
      white-space: nowrap;
    }
    .navigation__container {
      justify-content: flex-start;
    }
    .navigation__account {
      position: static;
      margin-right: 16px;
    }
  }
`
