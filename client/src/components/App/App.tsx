import React from 'react';
import { createBrowserHistory } from 'history';
import { Router as BrowserRouter, Route } from 'react-router-dom';
import ApolloProvider from '../../providers/ApolloProvider';
import ThemeProvider from '../../providers/ThemeProvider';
import RouteProvider from '../../providers/RouteProvider';
import StupidShitProvider from '../../providers/StupidShitProvider';
import { ROUTE_ACCOUNTS_HOME, ROUTE_MAIL_HOME, ROUTE_HOME } from '../../routes';
import AccountsHome from '../../views/AccountsHome';
import Dashboard from '../Dashboard';
import MailHome from '../../views/MailHome';
import Switch from '../Switch';

function App() {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <BrowserRouter history={createBrowserHistory()}>
          <RouteProvider>
            <StupidShitProvider>
              <Dashboard>
                <Switch>
                  <Route
                    exact={true}
                    path={ROUTE_HOME}
                    component={AccountsHome} />
                  <Route
                    exact={true}
                    path={ROUTE_ACCOUNTS_HOME}
                    component={AccountsHome} />
                  <Route
                    path={ROUTE_MAIL_HOME}
                    component={MailHome} />
                </Switch>
              </Dashboard>
            </StupidShitProvider>
          </RouteProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
