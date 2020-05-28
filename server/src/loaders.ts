import { AppLoaders } from "./types";
import createAccountLoader from './bank/objects/Account/loader';
import createTransactionLoaders from './bank/objects/Transaction/loader';

function createLoaders(): AppLoaders {
    return {
        ...createAccountLoader(),
        ...createTransactionLoaders()
    };
}

export default createLoaders;