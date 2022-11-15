import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.GRAPHCMS_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_API_TOKEN}`,
  },
  cache: new InMemoryCache(),
})
