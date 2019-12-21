import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'

export const Breadcrumb = styled.div`
  margin: 32px 0;
  a {
    font-family: 'Proxima Nova Bold';
  }
  ul {
    list-style-type: none;
  }
  i {
    margin-right: 16px;
    font-size: 14px;
    font-weight: bold;
  }
  li {
    display: none;
    &:nth-last-child(2) {
      display: block;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    i {
      display: none;
    }
    ul {
      display: flex;
    }
    li {
      display: inline-block;
      &:not(:last-child):after {
        margin: 0 8px;
        content: '/';
      }
    }
  }
`
