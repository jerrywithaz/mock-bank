import { ObjectType, Field, ID, Float, InputType } from 'type-graphql';
import DataLoader from 'dataloader';
import LoadAllDataLoader from '../../../utils/LoadAllDataLoader';

export type TransactionVerb = "withdrawal" | "deposit" | "transfer" | "check";

@ObjectType({description: "The Transaction Object Type."})
@InputType("TransactionInput")
export class TransactionType {

    @Field(() => ID)
    id: string;

    @Field()
    accountId: string;

    @Field()
    date: string;
    
    @Field()
    description: string;

    @Field(() => Float)
    amount: number;

    @Field(() => Float)
    availableBalance: number;

    @Field()
    type: TransactionVerb;

}

export type TransactionLoaderLoadAllOptions = { 
    accountId: string; 
};

export type SingleTransactionLoaderKey = {
    id: string;
    accountId: string;
};

export type SingleAccountTransactionDataLoader = LoadAllDataLoader<string, TransactionType | null, TransactionLoaderLoadAllOptions>;

export type AllAccountsTransactionsDataLoader = DataLoader<string, TransactionType[]>;

export type TransactionLoaders = {
    transactions: SingleAccountTransactionDataLoader;
    allTransactions: AllAccountsTransactionsDataLoader;
};