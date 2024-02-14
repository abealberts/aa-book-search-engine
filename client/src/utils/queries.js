import { gql } from '@appolo/client';

export const QUERY_USER = gql`
    query users($_id: String) {
        user(_id: $_id) {
            _id
            username
            email
            password
            savedBooks
        }
    }
`;