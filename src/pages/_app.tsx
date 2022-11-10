import 'styles/globals.css'

import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { client } from 'services/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fadeapp - Seu parceiro de atividade</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
