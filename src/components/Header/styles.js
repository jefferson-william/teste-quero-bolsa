import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'
import colors from '~/styles/colors'

export const Header = styled.header`
  background-color: #fff;
  color: ${colors.blue.secondary};
  span {
    font-family: 'Proxima Nova Bold';
  }
  .header__container {
    justify-content: center;
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 8px;
  }
  .header__more,
  .header__help,
  .header__account {
    height: 100%;
    padding: 8px 0;
  }
  .header__more,
  .header__account {
    position: absolute;
    top: 0;
    i {
      margin-bottom: 4px;
    }
  }
  .header__more,
  .header__help,
  .header__account,
  .header__account div {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .header__contact,
  .header__account__name {
    display: none;
  }
  .header__more {
    left: 16px;
  }
  .header__account {
    right: 16px;
    div {
      padding-left: 16px;
      border-left: 2px solid ${colors.gray.primary};
    }
  }
  .header__help {
    padding-right: 16px;
    border-right: 2px solid ${colors.gray.primary};
  }
  .header__help__desktop {
    display: none;
  }
  .header__contact {
    strong {
      margin-bottom: 4px;
    }
    i {
      color: ${colors.green.primary};
    }
  }
  .header__logo {
    width: 120px;
    padding: 8px 0;
  }
  @media (min-width: ${breakpoints.lg}) {
    padding: 8px 0;
    .header__contact,
    .header__account__name,
    .header__help__desktop {
      display: block;
    }
    .header__account__text,
    .header__help__mobile {
      display: none;
    }
    .header__more {
      flex-direction: row;
      display: flex;
    }
    .header__help {
      flex-direction: row;
      padding-right: 24px;
      span {
        margin-left: 8px;
      }
    }
    .header__contact {
      align-items: center;
      display: flex;
      margin-left: 24px;
      div + div {
        flex-direction: column;
        display: flex;
        margin-left: 8px;
      }
    }
    .header__account div {
      flex-direction: row-reverse;
      border: 0;
      i {
        margin-left: 16px;
      }
    }
  }
`
