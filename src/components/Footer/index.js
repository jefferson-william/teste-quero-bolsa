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
          <div>
            <i className="fab fa-whatsapp" />
            <p>0800 123 2222</p>
            <span>Seg - Sex 8h-22h</span>
          </div>
          <div>
            <i className="fal fa-comments" />
            <p>Chat ao vivo</p>
            <span>Seg - Sex 8h-22h</span>
          </div>
          <div>
            <i className="fal fa-envelope" />
            <p>Mande um e-mail</p>
            <span>Respondemos rapidinho</span>
          </div>
          <div>
            <i className="fal fa-info-circle" />
            <p>Central de ajuda</p>
            <span>Encontre todas as respostas</span>
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
