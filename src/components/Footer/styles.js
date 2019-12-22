import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'
import colors from '~/styles/colors'

export const Footer = styled.footer`
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  display: flex;
  margin-top: 32px;
  font-family: 'Proxima Nova Bold';
  &,
  i {
    color: #fff;
  }
  > div {
    width: 100%;
  }
  .footer__info {
    background: ${colors.blue.secondary};
  }
  .footer__information {
    padding-bottom: 32px;
    div {
      margin-top: 32px;
    }
    i {
      position: relative;
      bottom: -6px;
      margin-right: 16px;
      margin-bottom: 8px;
      float: left;
    }
    p {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
  .footer__last {
    padding: 32px 0;
    text-align: center;
    background: ${colors.blue.primary};
    i {
      margin: 0 8px;
      font-size: 14px;
    }
  }
  @media (min-width: ${breakpoints.md}) {
    .footer__information {
      display: grid;
      grid-template-columns: 50fr 50fr;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    .footer__information {
      grid-template-columns: 25fr 25fr 25fr 25fr;
    }
  }
`
