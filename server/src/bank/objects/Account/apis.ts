import orderBy from 'lodash/orderBy'
import { AccountType, TransferResult } from './types';
import api from '../../../api';
import { TransactionType } from '../Transaction/types';
import { createTransaction } from '../Transaction/apis';
import { GraphQLContext } from '../../../types';

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

export async function getRecentTransactions(context: GraphQLContext): Promise<TransactionType[]> {
    const accounts = await context.loaders.accounts.loadAllWithoutErrors();
    const transactionsData = await context.loaders.transactions.loadMany(accounts.map((account) => account.id));
    const transactions = transactionsData.reduce<TransactionType[]>((accumulator, transactionsMaybe) => {
        if (Array.isArray(transactionsMaybe)) {
            accumulator.push(...transactionsMaybe);
        }
        return accumulator;
    }, []);
    const recentTransactions = orderBy(transactions, "date", "desc").slice(0, 5);
    
    return recentTransactions;
}

export async function makeTransfer(context: GraphQLContext, fromAccountId: string, toAccountId: string, amount: number): Promise<TransferResult | Error> {
    const fromAccount = await context.loaders.accounts.load(fromAccountId);
    const toAccount = await context.loaders.accounts.load(toAccountId);
    const floatAmount = parseFloat(amount.toFixed(2));

    await createTransaction(fromAccountId, -floatAmount, "transferTo", `Transfer to #${toAccount.accountNumber.slice(toAccount.accountNumber.length - 4)}`);
    await createTransaction(toAccountId, floatAmount, "transferFrom", `Transfer from #${fromAccount.accountNumber.slice(fromAccount.accountNumber.length - 4)}`);

    return {
        fromAccount: await context.loaders.accounts.clear(fromAccountId).load(fromAccountId),
        toAccount: await context.loaders.accounts.clear(toAccountId).load(toAccountId)
    };

}