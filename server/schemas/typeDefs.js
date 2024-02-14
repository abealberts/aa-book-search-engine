const typeDefs =`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Book {
        _id: ID!
        authors: [String!]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type Query {
        users (_id: String): [User]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        login(username: String!, email: String!, password: String!)
        saveBook(bookId: String!, title: String!, description: String!): Book
        deleteBook(bookId: String!)
    }
`;

module.exports = typeDefs;