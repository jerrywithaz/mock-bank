import { 
    Resolver, 
    Query,
    Args,
    FieldResolver,
    Root,
    Mutation,
    Float
} from 'type-graphql';
import { StupidShitType } from './types';
import { getStupidShit } from './apis';

@Resolver(() => StupidShitType)
class StupidShitResolver {

    @Query(() => StupidShitType)
    async stupidShit(
    ): Promise<StupidShitType> {
        return await getStupidShit();
    }

}

export default StupidShitResolver;