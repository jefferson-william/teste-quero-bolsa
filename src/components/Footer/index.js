import React from 'react'
import { Footer } from './styles'

export default () => {
  return (
    <Footer
      id="Footer"
      className="footer"
      role="contentinfo"
      aria-label="Rodapé">
      <div className="footer__info">
        <div className="footer__information container">
          <div className="footer__whatsapp">
            <div className="footer__whatsapp__content">
              <i className="fab fa-whatsapp" />
              <p>0800 123 2222</p>
              <span className="footer__text__desktop">Seg - Sex 8h-22h</span>
              <p className="footer__whatsapp__text footer__text__mobile">
                Segunda a sexta de 8h às 22h
              </p>
            </div>
          </div>
          <div className="footer__other">
            <i className="fal fa-comments" />
            <p className="footer__text__mobile">Chat</p>
            <p className="footer__text__desktop">Chat ao vivo</p>
            <span className="footer__text__desktop">Seg - Sex 8h-22h</span>
          </div>
          <div className="footer__other">
            <i className="fal fa-envelope" />
            <p className="footer__text__mobile">E-mail</p>
            <p className="footer__text__desktop">Mande um e-mail</p>
            <span className="footer__text__desktop">Respondemos rapidinho</span>
          </div>
          <div className="footer__other">
            <i className="fal fa-info-circle" />
            <p className="footer__text__mobile">Ajuda</p>
            <p className="footer__text__desktop">Central de ajuda</p>
            <span className="footer__text__desktop">
              Encontre todas as respostas
            </span>
          </div>
        </div>
      </div>
      <div className="footer__last">
        <div className="container">
          <p>
            Feito com
            <i className="fal fa-heart" />
            pela Quero Educação
          </p>
        </div>
      </div>
    </Footer>
  )
}
