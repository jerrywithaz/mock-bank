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
import { TransactionType } from './types';
import { GetTransactionArgs, GetTransactionsArgs } from './args';
import { GraphQLContext } from '../../../types';

@Resolver(() => TransactionType)
class TransactionResolver {

    @Query(() => TransactionType, {nullable: true})
    async transaction(
        @Args() { accountId, transactionId }: GetTransactionArgs,
        @Ctx() context: GraphQLContext
    ): Promise<TransactionType | null> {
        return context.loaders.transactions.load(transactionId, accountId);
    }

    @Query(() => [TransactionType])
    async transactions(
        @Args() { accountId }: GetTransactionsArgs,
        @Ctx() context: GraphQLContext
    ): Promise<(TransactionType | Error | null)[]> {
        return context.loaders.transactions.loadAll({ accountId });
    }

}

export default TransactionResolver;