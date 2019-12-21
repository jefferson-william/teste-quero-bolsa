import { createGlobalStyle } from 'styled-components'
import ProximaNovaRegularEot from '~/assets/fonts/ProximaNova-Regular.eot'
import ProximaNovaRegularTtf from '~/assets/fonts/ProximaNova-Regular.ttf'
import ProximaNovaRegularWoff from '~/assets/fonts/ProximaNova-Regular.woff'
import ProximaNovaBoldEot from '~/assets/fonts/ProximaNova-Bold.eot'
import ProximaNovaBoldTtf from '~/assets/fonts/ProximaNova-Bold.ttf'
import ProximaNovaBoldWoff from '~/assets/fonts/ProximaNova-Bold.woff'
import FontAwesomeBrandsRegularEot from '~/assets/fonts/FontAwesomeBrands-Regular.eot'
import FontAwesomeBrandsRegularTtf from '~/assets/fonts/FontAwesomeBrands-Regular.ttf'
import FontAwesomeBrandsRegularSvg from '~/assets/fonts/FontAwesomeBrands-Regular.svg'
import FontAwesomeBrandsRegularWoff from '~/assets/fonts/FontAwesomeBrands-Regular.woff'
import '~/styles/font-awesome-brands.css'

export default createGlobalStyle`
  @font-face {
    font-family: 'Font Awesome Brands Regular';
    src: url(${FontAwesomeBrandsRegularEot});
    src: local('Proxima Nova'), local('ProximaNova-Regular'),
      url(${FontAwesomeBrandsRegularEot}) format('embedded-opentype'),
      url(${FontAwesomeBrandsRegularWoff}) format('woff'),
      url(${FontAwesomeBrandsRegularSvg}) format('svg'),
      url(${FontAwesomeBrandsRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Proxima Nova Bold';
    src: url(${ProximaNovaBoldEot});
    src: local('Proxima Nova Bold'), local('ProximaNova-Bold'),
      url(${ProximaNovaBoldEot}) format('embedded-opentype'),
      url(${ProximaNovaBoldWoff}) format('woff'),
      url(${ProximaNovaBoldTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
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
