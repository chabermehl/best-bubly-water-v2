import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import TestQuery from './components/atoms/TestQuery/TestQuery';

require('dotenv').config();

const client = new ApolloClient({
  uri: 'https://best-bubly-water.herokuapp.com/v1/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        'x-hasura-admin-secret': process.env.REACT_APP_API_SECRET_KEY,
      },
    });
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <TestQuery />
    </ApolloProvider>
  );
};

export default App;
