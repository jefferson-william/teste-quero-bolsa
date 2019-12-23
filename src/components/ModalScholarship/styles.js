import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'
import colors from '~/styles/colors'

export const ModalScholarship = styled.div`
  align-items: center;
  display: flex;
  padding-top: 8px;
  padding-bottom: 8px;
  > div:nth-child(2) {
    padding-left: 32px;
    padding-right: 32px;
  }
  .modal-scholarship__name {
    margin-bottom: 8px;
    font-family: 'Proxima Nova Bold';
    font-size: 18px;
    color: ${colors.blue.secondary};
  }
  .modal-scholarship__type {
    font-size: 14px;
  }
  .modal-scholarship__discount {
    margin: 24px 0 8px;
  }
  .modal-scholarship__discount-percentage,
  .modal-scholarship__price {
    font-family: 'Proxima Nova Bold';
    color: ${colors.green.primary};
  }
  .modal-scholarship__info {
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
  }
  @media (min-width: ${breakpoints.md}) {
    .modal-scholarship__info {
      flex-direction: row;
      > div:first-child {
        flex: 1;
      }
      .modal-scholarship__discount {
        margin-top: 0;
      }
    }
  }
`