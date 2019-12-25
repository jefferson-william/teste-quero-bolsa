import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'
import colors from '~/styles/colors'

export const ModalScholarship = styled.div`
  align-items: center;
  display: flex;
  padding: 24px 0;
  cursor: pointer;
  > div:nth-child(2) {
    padding-left: 32px;
    padding-right: 32px;
  }
  img {
    width: 128px;
    height: 48px;
  }
  .modal-scholarship__name {
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 16px;
    color: ${colors.blue.secondary};
  }
  .modal-scholarship__type {
    font-size: 13px;
  }
  .modal-scholarship__discount {
    margin: 24px 0 8px;
  }
  .modal-scholarship__discount-percentage,
  .modal-scholarship__price {
    font-weight: bold;
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
      > div + div {
        text-align: right;
      }
      .modal-scholarship__discount {
        margin-top: 0;
      }
    }
  }
`
