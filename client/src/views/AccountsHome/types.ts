import { RouteComponentProps } from 'react-router-dom';
import { AccountType, TransactionType } from '__generated__/graphql/types';

export type AccountHomeAccountSummaryQuery = Omit<AccountType, "transactions">;

export type AccountHomeRecentTransactionsQuery = TransactionType;

export type AccountHomeQueryData = {
    accounts: AccountHomeAccountSummaryQuery[],
    recentTransactions: AccountHomeRecentTransactionsQuery[]
};

export type AccountsHomeProps = RouteComponentProps<{}> & {
    
}