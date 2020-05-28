import { 
    Resolver, 
    Query,
    Args,
    FieldResolver,
    Root,
    Mutation,
    Float,
    Ctx
} from 'type-graphql';
import { AccountType, TransferResult } from './types';
import { TransactionType } from '../Transaction/types';
import { getRecentTransactions, makeTransfer } from './apis';
import { GetAccountArgs, AccountTransferArgs } from './args';
import { GraphQLContext } from '../../../types';

@Resolver(() => AccountType)
class AccountResolver {

    @Query(() => AccountType, { nullable: true })
    async account(
        @Args() { accountId }: GetAccountArgs,
        @Ctx() context: GraphQLContext
    ): Promise<AccountType | null> {
        try {
            return await context.loaders.accounts.load(accountId);
        } catch (error) {
            return null;
        }
    }

    @Query(() => [AccountType])
    async accounts(
        @Ctx() context: GraphQLContext
    ): Promise<AccountType[]> {
        return await context.loaders.accounts.loadAllWithoutErrors();
    }

    @Query(() => [TransactionType])
    async transactions(
        accountId: string,
        @Ctx() context: GraphQLContext
    ): Promise<TransactionType[]> {
        return await context.loaders.transactions.load(accountId);
    }

    @Query(() => [TransactionType])
    async recentTransactions(
        @Ctx() context: GraphQLContext
    ): Promise<TransactionType[]> {
        return await getRecentTransactions(context);
    }

    @FieldResolver(() => Float)
    async availableBalance(
        @Root() account: AccountType,
        @Ctx() context: GraphQLContext
    ): Promise<number> {
        const transactions = await context.loaders.transactions.load(account.id);
        const { availableBalance, amount } = transactions.length ? transactions[0] : { availableBalance: 0, amount: 0 };
        return availableBalance + amount;
    }

    @Mutation(() => AccountType)
    async transfer(
        @Args() {
            amount,
            fromAccountId,
            toAccountId
        }: AccountTransferArgs,
        @Ctx() context: GraphQLContext
    ): Promise<TransferResult | Error> {
        return await makeTransfer(context, fromAccountId, toAccountId, amount);
    }

}

export default AccountResolver;