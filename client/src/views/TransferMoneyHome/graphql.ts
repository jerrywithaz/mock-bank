import { gql } from 'apollo-boost';

export const transferMoneyHomeQuery = gql`
    query TransferMoneyHomeQuery {
        accounts {
            id,
            name,
            availableBalance,
            accountNumber
        }
    }
`;