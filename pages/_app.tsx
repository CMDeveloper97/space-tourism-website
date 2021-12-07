import '../styles/globals.scss'; 
import type { AppProps } from 'next/app' 

import { createGlobalStyle, ThemeProvider } from "styled-components";


const theme: TTheme = {
  colors: {
    primary: {
      base: '#FFFFFF',
      dark: '#979797'
    },
    secondary: {
      base: '#D0D6F9',
    },
    black: {
      base: '#0B0D17'
    },
  },
  breakpoints: {
    small:  '375px',
    medium: '768px',
    large:  '992px',
    xLarge: '1200px',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <ThemeProvider theme={theme}> 
        <Component {...pageProps} />
      </ThemeProvider> 
    </> 
  )
}

export default MyApp
