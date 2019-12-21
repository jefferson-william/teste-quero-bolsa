import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'
import colors from '~/styles/colors'

export const AddScholarship = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 24px;
  text-align: center;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
  i {
    font-size: 48px;
    color: ${colors.blue.primary};
  }
  strong {
    margin: 24px 0 8px;
    font-size: 18px;
  }
  &:hover {
    i {
      color: ${colors.blue.secondary};
    }
  }
  @media (min-width: ${breakpoints.md}) {
    min-height: 300px;
    strong {
      margin-top: 32px;
    }
  }
`
