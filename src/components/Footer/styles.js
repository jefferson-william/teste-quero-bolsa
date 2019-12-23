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
    grid-template-areas:
      'whatsapp whatsapp  whatsapp'
      'other    other     other';
    display: grid;
    padding: 0;
    p {
      font-size: 16px;
    }
    > div {
      padding: 16px 0;
    }
  }
  .footer__whatsapp,
  .footer__other {
    flex-direction: column;
    align-items: center;
    display: flex;
    i {
      margin-bottom: 8px;
    }
  }
  .footer__whatsapp {
    grid-area: whatsapp;
    border-bottom: 1px solid ${colors.blue.primary};
    i {
      margin: 8px 16px 0 0;
      float: left;
    }
  }
  .footer__whatsapp__content {
    width: 256px;
  }
  .footer__whatsapp__text {
    margin-top: 8px;
    font-family: 'Proxima Nova';
  }
  .footer__other {
    & + .footer__other {
      border-left: 1px solid ${colors.blue.primary};
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
  .footer__text__desktop {
    display: none;
  }
  @media (min-width: ${breakpoints.lg}) {
    .footer__information {
      display: flex;
      padding: 0 16px;
      span {
        display: inline-block;
        margin-top: 8px;
      }
      > div {
        flex: 1;
        border: 0;
        margin: 32px 0;
      }
      p {
        display: block;
      }
      i {
        margin: 8px 16px 0 0;
        float: left;
      }
    }
    .footer__whatsapp,
    .footer__other {
      display: block;
    }
    .footer__other + .footer__other {
      border: 0;
    }
    .footer__whatsapp {
      grid-area: none;
      p {
        white-space: nowrap;
      }
    }
    .footer__other {
    }
    .footer__whatsapp__content {
      width: auto;
      margin: 0;
    }
    p.footer__text__mobile {
      display: none;
    }
    p.footer__text__desktop {
      display: block;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    .footer__information {
      grid-template-columns: 25fr 25fr 25fr 25fr;
    }
  }
`
