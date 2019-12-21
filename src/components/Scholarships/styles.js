import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'

export const Scholarships = styled.div`
  @media (min-width: ${breakpoints.md}) {
    flex: 3;
    display: flex;
  }
  @media (min-width: ${breakpoints.lg}) {
    flex: 5;
  }
`
