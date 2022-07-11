import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl5fxqjtw34am01t71nan4mea/master',
  cache: new InMemoryCache()
})
