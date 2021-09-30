import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  :root {
    --primaryColor: #d00000;
    --secundaryColor: #6a040f;
    --backgroundColor: #161616;
    --primaryTextColor: #fff;
    --secundaryTextColor: #f5f5f5;
  }


  html {
    height: 100%;
  }
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--backgroundColor);
    color: var(--primaryTextColor);
    font-family: "Roboto", sans-serif;
  }
  a {
    color: #FFFFFF;
    text-decoration: none;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
