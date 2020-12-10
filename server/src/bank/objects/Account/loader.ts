import { getAccount, getAccounts } from './apis';
import { AccountType, AccountLoaders } from './types';
import LoadAllDataLoader from '../../../utils/LoadAllDataLoader';

function createAccountsLoader() {
    function batchLoadFn(accountIds: readonly string[]) {
        return Promise.all(accountIds.map((accountId) => getAccount(accountId)));
    }
    function loadAllFn() {
        return getAccounts();
    }
    return new LoadAllDataLoader<string, AccountType>(batchLoadFn, loadAllFn);
}

function createLoader(): AccountLoaders {
    return {
        accounts: createAccountsLoader()
    };
}

export default createLoader;