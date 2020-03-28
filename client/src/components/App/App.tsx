import React from 'react';
import { createBrowserHistory } from 'history';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ACCOUNTS_HOME } from '../../routes';
import { GraphQLClient } from '../../graphql';
import AccountsHome from '../AccountsHome';
import Dashboard from '../Dashboard';

function App() {
  return (
    <ApolloProvider client={GraphQLClient}>
      <BrowserRouter history={createBrowserHistory()}>
        <Dashboard>
          <Switch>
            <Route path={ACCOUNTS_HOME} component={AccountsHome}/>
          </Switch>
        </Dashboard>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
