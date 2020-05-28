import { ArgsType, Field, ID, Float } from "type-graphql";
import { AccountType } from "./types";

@ArgsType()
export class GetAccountArgs {

    @Field(() => ID) 
    accountId: AccountType["id"];
    
}

@ArgsType()
export class AccountTransferArgs {

    @Field(() => Float) 
    amount: number;

    @Field(() => ID) 
    fromAccountId: AccountType["id"];

    @Field(() => ID) 
    toAccountId: AccountType["id"];
    
}
