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
    const transactionsData = await context.loaders.allTransactions.loadMany(accounts.map((account) => account.id));
    const transactions = transactionsData.reduce<TransactionType[]>((accumulator, transactionsMaybe) => {
        if (Array.isArray(transactionsMaybe)) {
            accumulator.push(...transactionsMaybe);
        }
        return accumulator;
    }, []);
    const recentTransactions = orderBy(transactions, "date", "desc").slice(0, 5);
    
    return recentTransactions;
}

export async function updateAvailableBalance(
    accountId: string, 
    availableBalance: number
): Promise<AccountType> {

    const fixedAvailableBalance = parseFloat(availableBalance.toFixed(2));
    const response = await api.patch<AccountType>(`/json/bank/accounts/${accountId}`, {
        availableBalance: fixedAvailableBalance
    });

    return response.data;
}

export async function makeTransfer(
    context: GraphQLContext, 
    fromAccountId: string, 
    toAccountId: string, 
    amount: number
): Promise<TransferResult | Error> {

    const fromAccount = await context.loaders.accounts.load(fromAccountId);
    const toAccount = await context.loaders.accounts.load(toAccountId);
    const floatAmount = parseFloat(amount.toFixed(2));
    const lastFourOfFromAccount = fromAccount.accountNumber.slice(fromAccount.accountNumber.length - 4);
    const lastFourOfToAccount = toAccount.accountNumber.slice(toAccount.accountNumber.length - 4);

    if (fromAccount.availableBalance >= floatAmount) {

        await updateAvailableBalance(fromAccountId, fromAccount.availableBalance - floatAmount);
        await updateAvailableBalance(toAccountId, toAccount.availableBalance + floatAmount);
        await createTransaction(fromAccountId, -floatAmount, "transfer", `Transfer to #${lastFourOfToAccount}`);
        await createTransaction(toAccountId, floatAmount, "transfer", `Transfer from #${lastFourOfFromAccount}`);

        const mutatedFromAccount = await context.loaders.accounts.clear(fromAccountId).load(fromAccountId);
        const mutatedToAccount = await context.loaders.accounts.clear(toAccountId).load(toAccountId);

        return {
            fromAccount: mutatedFromAccount,
            toAccount: mutatedToAccount
        };

    }
    else {
        return new Error(`Cannot make transfer from account ending in ${lastFourOfFromAccount} because there are not enough funds.`);
    }

}