import 'styles/globals.css'

import Head from 'next/head'

import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { DefaultSeo, NextSeo } from 'next-seo'

import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { client } from 'services/client'
import { pageview } from 'services/googleAnalytics'

import { Analytics } from 'components/Analytics'

import { SEO } from '../../next-seo.config.js'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const url = router.pathname

  useEffect(() => {
    function onLoadPageView(url: string) {
      pageview(url)
    }

    onLoadPageView(url)
  }, [url])

  return (
    <ApolloProvider client={client}>
      <Head>
        <NextSeo {...SEO} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <Analytics />
      </motion.div>
    </ApolloProvider>
  )
}

export default MyApp
