import { gql } from 'apollo-boost';

const queries = {
    accounts: gql`
        query AccountsQuery {
            accounts {
                id,
                name,
                availableBalance,
                type
            }
        }
    `
};

export {
    queries
};