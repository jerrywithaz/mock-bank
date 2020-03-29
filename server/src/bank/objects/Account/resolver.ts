import { 
    Resolver, 
    Query,
    Args,
    FieldResolver,
    Root,
    Mutation,
    Float
} from 'type-graphql';
import { AccountType } from './types';
import { TransactionType } from '../Transaction/types';
import { getAccount, getAccounts, getRecentTransactions } from './apis';
import { GetAccountArgs } from './args';

@Resolver(() => AccountType)
class AccountResolver {

    @Query(() => AccountType, { nullable: true })
    async account(
        @Args() { accountId }: GetAccountArgs
    ): Promise<AccountType | null> {
        return await getAccount(accountId) || null;
    }

    @Query(() => [AccountType])
    async accounts(
    ): Promise<AccountType[]> {
        return await getAccounts();
    }

    @Query(() => [TransactionType])
    async recentTransactions(
    ): Promise<TransactionType[]> {
        return await getRecentTransactions();
    }

    @FieldResolver(() => Float)
    availableBalance(
        @Root() account: AccountType
    ): number {
        const { availableBalance = 0, amount = 0 } = account.transactions[0];
        return availableBalance + amount;
    }

}

export default AccountResolver;