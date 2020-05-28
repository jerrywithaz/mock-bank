import { getAccount, getAccounts } from './apis';
import { AccountType, AccountLoaders } from './types';
import LoadAllDataLoader from '../../../utils/LoadAllDataLoader';

function createAccountsLoader() {
    return new LoadAllDataLoader<string, AccountType>((accountIds) => Promise.all(accountIds.map((accountId) => getAccount(accountId))), () => getAccounts());
}

function createLoader(): AccountLoaders {
    return {
        accounts: createAccountsLoader()
    };
}

export default createLoader;