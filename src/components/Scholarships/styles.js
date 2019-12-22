import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'

export const Scholarships = styled.div`
  margin: -16px;
  > div {
    margin: 16px;
  }
  @media (min-width: ${breakpoints.md}) {
    display: grid;
    grid-template-columns: 50fr 50fr;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 33fr 33fr 33fr;
  }
  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: 25fr 25fr 25fr 25fr;
  }
`
