import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'
import colors from '~/styles/colors'

export const AddScholarshipModal = styled.form`
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 16px;
  text-align: left;
  z-index: 1;
  cursor: default;
  label {
    font-family: 'Proxima Nova Bold';
    font-size: 14px;
    text-transform: uppercase;
  }
  img {
    max-width: 192px;
    height: 48px;
  }
  hr {
    margin: 16px 0;
  }
  .add-scholarship-modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: ${colors.modalOverlay};
  }
  .add-scholarship-modal__container {
    position: relative;
    width: 100%;
    padding: 0 24px;
    margin-top: 64px;
    background: #fff;
  }
  .add-scholarship-modal__close-action {
    position: absolute;
    top: -44px;
    right: 16px;
    border: 0;
    background: none;
    pointer-events: none;
  }
  .add-scholarship-modal__close-icon {
    font-size: 24px;
    color: #fff;
  }
  .add-scholarship-modal__content,
  .add-scholarship-modal__field {
    margin: 32px 0;
  }
  .add-scholarship-modal__title {
    margin-bottom: 8px;
    font-family: 'Proxima Nova Bold';
    font-size: 24px;
  }
  .add-scholarship-modal__fields-mark {
    input {
      margin-right: 8px;
    }
    label {
      margin-right: 32px;
      font-family: 'Proxima Nova';
      font-size: 14px;
      text-transform: none;
    }
  }
  .add-scholarship-modal__checkboxes {
    margin-top: 32px;
    label {
      font-size: 16px;
    }
  }
  .add-scholarship-modal__range-formated {
    margin: 8px 0;
  }
  .add-scholarship-modal__label {
    font-size: 14px;
    text-transform: uppercase;
  }
  .add-scholarship-modal__ranger {
    margin: 16px 0;
  }
  .add-scholarship-modal__filter {
    justify-content: space-between;
    display: flex;
    i {
      margin-left: 8px;
      font-size: 14px;
      font-weight: bold;
    }
    p {
      margin-top: 8px;
      font-family: 'Proxima Nova Bold';
      color: ${colors.blue.secondary};
    }
  }
  .add-scholarship-modal__options {
    text-align: right;
  }
  .add-scholarship-modal__buttons {
    justify-content: space-between;
    display: flex;
    width: 100%;
    margin: 32px 0 24px;
  }
  @media (min-width: ${breakpoints.md}) {
    .add-scholarship-modal__container {
      max-width: 720px;
      padding: 8px 32px;
    }
    .add-scholarship-modal__fields {
      display: flex;
    }
    .add-scholarship-modal__field {
      flex: 1;
      margin: 8px 0;
      & + .add-scholarship-modal__field {
        margin-left: 16px;
      }
    }
    .add-scholarship-modal__checkboxes {
      margin-top: 40px;
    }
    .add-scholarship-modal__options {
      align-items: center;
      display: flex;
      p {
        margin: 0 0 0 4px;
      }
    }
    .add-scholarship-modal__buttons {
      justify-content: flex-end;
      button {
        width: auto;
      }
    }
  }
`
