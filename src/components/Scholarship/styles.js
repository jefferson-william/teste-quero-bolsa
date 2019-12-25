import styled from 'styled-components'
import colors from '~/styles/colors'

export const Scholarship = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  padding: 24px;
  font-size: 13px;
  text-align: center;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
  img {
    width: 160px;
    height: 56px;
    margin-bottom: 32px;
  }
  strong {
    font-weight: bold;
    text-transform: uppercase;
  }
  a {
    font-weight: bold;
  }
  hr {
    margin: 8px 0;
  }
  .scholarship__punctuation,
  .scholarship__period,
  .scholarship__when,
  .scholarship__text,
  .scholarship__title {
    display: block;
    margin: 8px 0;
  }
  .scholarship__punctuation {
    align-items: center;
    display: flex;
  }
  .scholarship__text {
    margin-bottom: 16px;
  }
  .scholarship__title {
    align-items: center;
    display: flex;
    height: 44px;
    font-size: 16px;
  }
  .scholarship__score {
    margin-right: 8px;
    font-size: 18px;
  }
  .scholarship__original-price {
    text-decoration: line-through;
  }
  .scholarship__discount-price {
    display: inline-block;
    margin: 8px 4px 0 0;
    font-weight: bold;
    font-size: 19px;
    color: ${colors.green.primary};
  }
  .scholarship__buttons {
    justify-content: space-between;
    display: flex;
    width: 100%;
    margin-top: 16px;
  }
`
