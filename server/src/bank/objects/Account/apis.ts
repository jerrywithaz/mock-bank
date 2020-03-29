import orderBy from 'lodash/orderBy'
import { AccountType } from './types';
import api from '../../../api';
import { TransactionType } from '../Transaction/types';

export async function getAccount(accountId: string): Promise<AccountType> {
    const response = await api.get<AccountType>(`/json/bank/accounts/${accountId}`);
    const account = response.data;
    return account;
}

export async function getAccounts(): Promise<AccountType[]> {
    const response = await api.get<AccountType[]>(`/json/bank/accounts`);
    const accounts = response.data;
    return accounts;
}

export async function getRecentTransactions(): Promise<TransactionType[]> {
    const response = await api.get<AccountType[]>(`/json/bank/accounts`);
    const accounts = response.data;
    const transactions = orderBy(accounts.reduce<TransactionType[]>((recentTransactions, account) => {
        return recentTransactions.concat(account.transactions.slice(0, 5));
    }, []), "date", "desc");
    const recentTransactions = transactions.slice(0, 5);
    return recentTransactions;
}