import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';

/**
 * Builds the GraphQL Schema.
 */
async function schema(): Promise<GraphQLSchema> {
    return await buildSchema({
        resolvers: [`${__dirname}/admin/objects/**/resolver.ts`, `${__dirname}/bank/objects/**/resolver.ts`],
        emitSchemaFile: `${__dirname}/__generated__/schema.gql`
    });
}
    
export default schema;