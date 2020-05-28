import DataLoader from 'dataloader';
import { getTransactions, getTransaction } from './apis';
import { TransactionType, TransactionLoaders } from './types';

function createTransactionsLoader() {
    return new DataLoader<string, TransactionType[]>((accountIds) => Promise.all(accountIds.map((accountId) => getTransactions(accountId))));
}

function createTransactionLoader() {
    return new DataLoader<{accountId: string, transactionId: string}, TransactionType | null>((accountIds) => Promise.all(accountIds.map(({accountId, transactionId}) => getTransaction(accountId, transactionId))));
}

function createLoaders(): TransactionLoaders {
    return {
        transaction: createTransactionLoader(),
        transactions: createTransactionsLoader()
    };
}

export default createLoaders;