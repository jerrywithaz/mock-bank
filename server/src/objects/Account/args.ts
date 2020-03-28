import { ArgsType, Field, ID } from "type-graphql";
import { AccountType } from "./types";

@ArgsType()
export class GetAccountArgs {

    @Field(() => ID) 
    accountId: AccountType["id"];
    
}
