import React from 'react'
import css from '@emotion/css/macro'
import { Global } from '@emotion/core'
import { grayBackground, tronBlue } from '../../consts'
import TronFontEot from '../../static/fonts/tr2n-webfont.eot'
import TronFontWoff2 from '../../static/fonts/tr2n-webfont.woff2'
import TronFontWoff from '../../static/fonts/tr2n-webfont.woff'
import TronFontTtf from '../../static/fonts/tr2n-webfont.ttf'
import TronFontSVG from '../../static/fonts/tr2n-webfont.svg'

const globalStyles = css`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  html {
    cursor: default;
    line-height: 1.5;
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-tap-highlight-color: transparent;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    word-break: break-word;
  }

  html,
  body,
  #__next {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: ${grayBackground};
    color: ${tronBlue};
    font-family: 'Open Sans', sans-serif;

    @font-face {
      font-family: 'tr2ntr2n';
      src: url(${TronFontEot});
      src: url(${TronFontWoff2}) format('woff2'), url(${TronFontWoff}) format('woff'),
        url(${TronFontTtf}) format('truetype'), url(${TronFontSVG}#tr2ntr2n) format('svg');
      font-weight: normal;
      font-style: normal;
    }
  }

  body.fontLoaded {
    font-family: 'Open Sans', sans-serif;
  }
`

export default () => <Global styles={globalStyles} />
