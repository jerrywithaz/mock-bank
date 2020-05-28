import { AccountLoaders } from "./bank/objects/Account/types";
import { TransactionLoaders } from "./bank/objects/Transaction/types";

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type NullOrUndefined<T> = T | null | undefined;

export type AppLoaders = AccountLoaders & TransactionLoaders;

export type GraphQLContext = {
    loaders: AppLoaders;
};
