import DataLoader from 'dataloader';
import { getTransactions, getTransaction } from './apis';
import { TransactionType, TransactionLoaders } from './types';
import LoadAllDataLoader from '../../../utils/LoadAllDataLoader';

function createAccountTransactionLoader() {
    function batchLoadFn(ids: readonly string[], accountId: string): Promise<(TransactionType | Error)[]> {
        return Promise.all(ids.map((id) => getTransaction(accountId, id)));
    }
    function loadAllFn(options: { accountId: string }): Promise<TransactionType[]> {
        return getTransactions(options.accountId);
    }
    return new LoadAllDataLoader<string, TransactionType, { accountId: string }>(batchLoadFn, loadAllFn);
}

function createAllTransactionsLoader() {
    return new DataLoader<string, TransactionType[]>(accountIds => Promise.all(accountIds.map((accountId) => getTransactions(accountId))));
}

function createLoaders(): TransactionLoaders {
    return {
        transactions: createAccountTransactionLoader(),
        allTransactions: createAllTransactionsLoader()
    };
}

export default createLoaders;