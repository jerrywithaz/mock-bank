import { ObjectType, Field, ID, Float, InputType } from 'type-graphql';
import { TransactionType } from '../Transaction/types';

@ObjectType({description: "The Account Object Type."})
@InputType("AccountInput")
export class AccountType {

    @Field(() => ID)
    id: string;

    @Field()
    name: string;
    
    @Field(() => Float)
    availableBalance: number;

    @Field(() => [TransactionType])
    transactions: TransactionType[];

    @Field({defaultValue: "checking"})
    type: "checking" | "savings" | "mma" | "ira";

}