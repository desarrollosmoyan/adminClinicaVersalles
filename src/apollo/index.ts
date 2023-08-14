import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import enviroment from 'src/enviroment'

const httpLink = createHttpLink({
  uri: enviroment.URL + '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('accessToken')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
