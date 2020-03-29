import { gql } from 'apollo-boost';

export const accountsHomeQuery = gql`
    query AccountsHomeQuery {
        accounts {
            id,
            name,
            availableBalance,
            type,
            accountNumber,
            routingNumber
        },
        recentTransactions {
            id,
            date,
            amount,
            description,
            availableBalance,
            type
        }
    }
`;
