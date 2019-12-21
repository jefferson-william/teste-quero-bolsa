import React from 'react'
import { Header } from './styles'

export default () => {
  return (
    <Header className="header">
      <div className="header__container container">
        <div className="header__more">
          <div className="header__help">
            <i className="fal fa-info-circle" />
            <span className="header__help__mobile">Ajuda</span>
            <span className="header__help__desktop">Como funciona</span>
          </div>
          <div className="header__contact">
            <div>
              <i className="fab fa-whatsapp" />
            </div>
            <div>
              <strong>0800 123 2222</strong>
              <span>
                <small>Envie mensagem ou ligue</small>
              </span>
            </div>
          </div>
        </div>
        <div className="header__logo">
          <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Logo" />
        </div>
        <div className="header__account">
          <div>
            <i className="fal fa-user-circle" />
            <span className="header__account__text">Conta</span>
            <span className="header__account__name">Nome Sobrenome</span>
          </div>
        </div>
      </div>
    </Header>
  )
}
