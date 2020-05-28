import { ObjectType, Field, ID, Float, InputType } from 'type-graphql';
import DataLoader from 'dataloader';

export type TransactionVerb = "withdrawal" | "deposit" | "transferFrom" | "transferTo" | "check";

@ObjectType({description: "The Transaction Object Type."})
@InputType("TransactionInput")
export class TransactionType {

    @Field(() => ID)
    id: string;

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

export type SingleTransactionDataLoader = DataLoader<{accountId: string, transactionId: string}, TransactionType | null>;

export type CollectionTransactionDataLoader = DataLoader<string, TransactionType[]>;

export type TransactionLoaders = {
    transaction: SingleTransactionDataLoader;
    transactions: CollectionTransactionDataLoader;
};