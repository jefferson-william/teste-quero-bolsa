import styled from 'styled-components'
import colors from '~/styles/colors'
import { breakpoints } from '~/styles/metrics'

export const SemesterFilter = styled.div`
  margin-bottom: 32px;
  ul {
    border-radius: 4px;
    border: 1px solid ${colors.blue.secondary};
    list-style-type: none;
  }
  li + li {
    border-top: 1px solid ${colors.blue.secondary};
  }
  .semester-filter__action {
    display: block;
    padding: 8px 16px;
    font-family: 'Proxima Nova Bold';
    text-align: center;
    &:hover,
    &:active,
    &.semester-filter__action--active {
      color: #fff;
      background: ${colors.blue.secondary};
    }
  }
  @media (min-width: ${breakpoints.md}) {
    justify-content: flex-end;
    display: flex;
    ul {
      display: flex;
    }
    li + li {
      border-top: 0;
      border-left: 1px solid ${colors.blue.secondary};
    }
  }
`
