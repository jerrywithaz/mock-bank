import { AccountType } from './types';
import api from '../../api';

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