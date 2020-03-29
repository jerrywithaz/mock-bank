import React from 'react';
import { createBrowserHistory } from 'history';
import { Router as BrowserRouter } from 'react-router-dom';
import { ROUTE_ACCOUNTS_HOME, ROUTE_MAIL_HOME, ROUTE_HOME, ROUTE_FAQ_HOME, ROUTE_FEEDBACK_HOME, ROUTE_CONTACT_HOME, ROUTE_CARDS_HOME } from 'routes';
import ApolloProvider from 'providers/ApolloProvider';
import ThemeProvider from 'providers/ThemeProvider';
import RouteProvider from 'providers/RouteProvider';
import StupidShitProvider from 'providers/StupidShitProvider';
import AccountsHome from 'views/AccountsHome';
import MailHome from 'views/MailHome';
import FaqHome from 'views/FaqHome';
import FeedbackHome from 'views/FeedbackHome';
import Dashboard from 'components/Dashboard';
import Switch from 'components/Switch';
import AnnoyingRoute from 'components/AnnoyingRoute';
import ContactHome from 'views/ContactHome';
import CardsSummary from 'views/CardsSummary';

function App() {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <BrowserRouter history={createBrowserHistory()}>
          <RouteProvider>
            <StupidShitProvider>
              <Dashboard>
                <Switch>
                  <AnnoyingRoute
                    exact={true}
                    path={ROUTE_HOME}
                    component={AccountsHome} />
                  <AnnoyingRoute
                    exact={true}
                    path={ROUTE_ACCOUNTS_HOME}
                    component={AccountsHome} />
                  <AnnoyingRoute
                    path={ROUTE_MAIL_HOME}
                    component={MailHome} />
                  <AnnoyingRoute
                    path={ROUTE_CONTACT_HOME}
                    component={ContactHome} />
                  <AnnoyingRoute
                    path={ROUTE_FAQ_HOME}
                    component={FaqHome} />
                  <AnnoyingRoute
                    path={ROUTE_FEEDBACK_HOME}
                    component={FeedbackHome} />
                  <AnnoyingRoute
                    path={ROUTE_CARDS_HOME}
                    component={CardsSummary} />
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
