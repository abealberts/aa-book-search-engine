import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser(username: String!, email: String!, password: String!) {
        createUser(username: String!, email: String!, password: String!) {
            _id
            username
            email
            password
        }
    }
`;

export const LOGIN = gql`
    mutation login(username: String!, email: String!, password: String!) {
        login(username: String!, password: String!) {
            _id
            username
            email
            password
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook(bookId: String!, title: String!, description: String!) {
        saveBook(bookId: String!, title: String!, description: String!) {
            _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation deleteBook(bookId: String!) {
        deleteBook(bookId: String!) {
            _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
`;