import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import FlavorsPage from './components/pages/FlavorsPage/FlavorsPage';

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FlavorsPage} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
