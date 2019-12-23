import styled from 'styled-components'
import colors from '~/styles/colors'

export const Field = styled.div`
  input {
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 1px solid ${colors.gray.secondary};
    padding: 8px 16px;
    margin-top: 8px;
    color: ${colors.black};
    &,
    &::placeholder {
      font-family: 'Proxima Nova';
      font-size: 14px;
    }
  }
  label {
    display: block;
    margin: 8px 0;
  }
  .field__input {
    position: relative;
  }
  .field__icon,
  .field__checkbox {
    position: absolute;
    top: 0;
    right: 0;
  }
  .field__checkbox {
    width: 48px;
    height: 48px;
    border: 0;
    appearance: none;
  }
  .field__icon {
    margin: 26px 14px 0 0;
    font-size: 12px;
    color: ${colors.black};
  }
`
