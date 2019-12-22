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
import FontAwesomeSolidRegularEot from '~/assets/fonts/FontAwesomeSolid-Bold.eot'
import FontAwesomeSolidRegularTtf from '~/assets/fonts/FontAwesomeSolid-Bold.ttf'
import FontAwesomeSolidRegularSvg from '~/assets/fonts/FontAwesomeSolid-Bold.svg'
import FontAwesomeSolidRegularWoff from '~/assets/fonts/FontAwesomeSolid-Bold.woff'
import FontAwesomeSolidRegularWoff2 from '~/assets/fonts/FontAwesomeSolid-Bold.woff2'
import '~/styles/font-awesome-brands.css'

export default createGlobalStyle`
  @font-face {
    font-family: 'Font Awesome Solid Regular';
    src: url(${FontAwesomeSolidRegularEot});
    src: local('Font Awesome Solid Regular'), local('FontAwesomeSolidRegular-Regular'),
      url(${FontAwesomeSolidRegularEot}) format('embedded-opentype'),
      url(${FontAwesomeSolidRegularWoff}) format('woff'),
      url(${FontAwesomeSolidRegularWoff2}) format('woff2'),
      url(${FontAwesomeSolidRegularSvg}) format('svg'),
      url(${FontAwesomeSolidRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Font Awesome Brands Regular';
    src: url(${FontAwesomeBrandsRegularEot});
    src: local('Font Awesome Brands Regular'), local('FontAwesomeBrandsRegular-Regular'),
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
