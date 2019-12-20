import { createGlobalStyle } from 'styled-components'
import ProximaNovaRegularEot from '~/assets/fonts/ProximaNova-Regular.eot'
import ProximaNovaRegularTtf from '~/assets/fonts/ProximaNova-Regular.ttf'
import ProximaNovaRegularWoff from '~/assets/fonts/ProximaNova-Regular.woff'

export default createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    src: url(${ProximaNovaRegularEot});
    src: local('Proxima Nova'), local('ProximaNova-Regular'),
      url(${ProximaNovaRegularEot}) format('embedded-opentype'),
      url(${ProximaNovaRegularWoff}) format('woff'),
      url(${ProximaNovaRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`
