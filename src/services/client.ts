import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl91z5pts2gpr01tchilleqhk/master',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_API_TOKEN}`,
  },
})
