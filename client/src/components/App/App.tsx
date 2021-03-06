import React from 'react';
import { 
  ROUTE_ADMIN_HOME,
  ROUTE_ACCOUNTS_HOME, 
  ROUTE_MAIL_HOME, 
  ROUTE_HOME, 
  ROUTE_FAQ_HOME, 
  ROUTE_FEEDBACK_HOME, 
  ROUTE_CONTACT_HOME, 
  ROUTE_CARDS_HOME, 
  ROUTE_TRANSFER_MONEY_HOME 
} from 'routes';
import ApolloProvider from 'providers/ApolloProvider';
import ThemeProvider from 'providers/ThemeProvider';
import RouteProvider from 'providers/RouteProvider';
import StupidShitProvider from 'providers/StupidShitProvider';
import ReactRouterProvider from 'providers/ReactRouterProvider';
import AdminHome from 'views/AdminHome';
import AccountsHome from 'views/AccountsHome';
import MailHome from 'views/MailHome';
import FaqHome from 'views/FaqHome';
import FeedbackHome from 'views/FeedbackHome';
import ContactHome from 'views/ContactHome';
import CardsSummary from 'views/CardsSummary';
import TransferMoneyHome from 'views/TransferMoneyHome';
import Dashboard from 'components/Dashboard';
import Switch from 'components/Switch';
import AnnoyingRoute from 'components/AnnoyingRoute';

function App() {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <ReactRouterProvider>
          <RouteProvider>
            <StupidShitProvider>
              <Dashboard>
                <Switch>
                <AnnoyingRoute
                    exact={true}
                    path={ROUTE_ADMIN_HOME}
                    component={AdminHome} />
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
                  <AnnoyingRoute
                    path={ROUTE_TRANSFER_MONEY_HOME}
                    component={TransferMoneyHome} />
                </Switch>
              </Dashboard>
            </StupidShitProvider>
          </RouteProvider>
        </ReactRouterProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
