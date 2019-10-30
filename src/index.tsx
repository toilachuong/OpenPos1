import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import config from './config';

const httpLink = createHttpLink({
  uri: config.graphql
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();
