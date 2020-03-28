import { 
    Resolver, 
    Query,
    Args,
    FieldResolver,
    Root,
    Mutation,
    Float
} from 'type-graphql';
import { TransactionType, TransactionVerb } from './types';
import { GetTransactionArgs, GetTransactionsArgs } from './args';
import { getTransaction, getTransactions } from './apis';

@Resolver(() => TransactionType)
class TransactionResolver {

    @Query(() => TransactionType, {nullable: true})
    async transaction(
        @Args() { accountId, transactionId }: GetTransactionArgs
    ): Promise<TransactionType | null> {
        return getTransaction(accountId, transactionId);
    }

    @Query(() => [TransactionType])
    async transactions(
        @Args() { accountId }: GetTransactionsArgs
    ): Promise<TransactionType[]> {
        return getTransactions(accountId);
    }

    @FieldResolver()
    type(
        @Root() transaction: TransactionType
    ): TransactionVerb {
        if (transaction.amount === 0) {
            throw new Error(`A Transaction with the id of ${transaction.id} has an amount of 0. `)
        }
        return transaction.amount > 0 ? "deposit" : "withdrawal";
    }

}

export default TransactionResolver;