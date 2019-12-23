import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'
import colors from '~/styles/colors'

export const AddScholarship = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  padding: 24px;
  text-align: center;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
  .add-scholarship__icon {
    font-size: 48px;
    color: ${colors.blue.primary};
  }
  .add-scholarship__title {
    margin: 24px 0 8px;
    font-size: 18px;
  }
  &:hover {
    .add-scholarship__icon {
      color: ${colors.blue.secondary};
    }
  }
  @media (min-width: ${breakpoints.md}) {
    min-height: 464px;
    .add-scholarship__title {
      margin-top: 32px;
    }
  }
`
