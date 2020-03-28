import { RouteComponentProps } from 'react-router-dom';
import { AccountType } from '../../types';

export type AccountHomeAccountSummaryQuery = Omit<AccountType, "transactions">;

export type AccountsHomeProps = RouteComponentProps<{}> & {
    
}