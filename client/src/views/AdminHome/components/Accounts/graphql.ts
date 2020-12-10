import { gql } from "apollo-boost";

export const adminHomeAccountsQuery = gql`
    query AdminHomeAccountsQuery {
        accounts {
            id,
            name,
            transactions {
                id
            }
        }
    }
`;