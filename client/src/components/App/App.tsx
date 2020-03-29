import React from 'react';
import { createBrowserHistory } from 'history';
import { Router as BrowserRouter } from 'react-router-dom';
import { ROUTE_ACCOUNTS_HOME, ROUTE_MAIL_HOME, ROUTE_HOME, ROUTE_FAQ_HOME } from 'routes';
import ApolloProvider from 'providers/ApolloProvider';
import ThemeProvider from 'providers/ThemeProvider';
import RouteProvider from 'providers/RouteProvider';
import StupidShitProvider from 'providers/StupidShitProvider';
import AccountsHome from 'views/AccountsHome';
import MailHome from 'views/MailHome';
import FaqHome from 'views/FaqHome';
import Dashboard from 'components/Dashboard';
import Switch from 'components/Switch';
import DelayedRoute from 'components/DelayedRoute';

function App() {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <BrowserRouter history={createBrowserHistory()}>
          <RouteProvider>
            <StupidShitProvider>
              <Dashboard>
                <Switch>
                  <DelayedRoute
                    exact={true}
                    path={ROUTE_HOME}
                    component={AccountsHome} />
                  <DelayedRoute
                    exact={true}
                    path={ROUTE_ACCOUNTS_HOME}
                    component={AccountsHome} />
                  <DelayedRoute
                    path={ROUTE_MAIL_HOME}
                    component={MailHome} />
                  <DelayedRoute
                    path={ROUTE_FAQ_HOME}
                    component={FaqHome} />
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
