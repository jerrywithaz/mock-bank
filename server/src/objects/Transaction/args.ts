import { ArgsType, Field, ID } from "type-graphql";
import { TransactionType } from "./types";
import { AccountType } from "../Account/types";

@ArgsType()
export class GetTransactionArgs {

    @Field(() => ID) 
    accountId: AccountType["id"];

    @Field(() => ID) 
    transactionId: TransactionType["id"];
    
}

@ArgsType()
export class GetTransactionsArgs {

    @Field(() => ID) 
    accountId: AccountType["id"];
    
}
