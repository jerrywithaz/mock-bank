import { ObjectType, Field, ID, Float, InputType } from 'type-graphql';
import { TransactionType } from '../Transaction/types';
import LoadAllDataLoader from '../../../utils/LoadAllDataLoader';

@ObjectType({description: "The Account Object Type."})
@InputType("AccountInput")
export class AccountType {

    @Field(() => ID)
    id: string;

    @Field()
    accountNumber: string;

    @Field()
    routingNumber: string;

    @Field()
    name: string;
    
    @Field(() => Float)
    availableBalance: number;

    @Field(() => [TransactionType])
    transactions: TransactionType[];

    @Field({defaultValue: "checking"})
    type: "checking" | "savings" | "mma" | "ira";

}

export type TransferResult = {
    fromAccount: AccountType;
    toAccount: AccountType;
};

export type AccountsDataLoader = LoadAllDataLoader<string, AccountType>;

export type AccountLoaders = {
    accounts: AccountsDataLoader;
};