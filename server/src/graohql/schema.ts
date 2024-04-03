export const typesofUser = `#graphql 
    type user {
        name:String!
        age:Int!
        password:String!
        email:String!
        id:ID!
    }

    type Query {
        users: [user]
    }
`;
