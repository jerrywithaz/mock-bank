import { ObjectType, Field, ID, Float, InputType } from 'type-graphql';

export type TransactionVerb = "withdrawal" | "deposit";

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