export const typeDefs=`#graphql
 
  type Query{
    users:[User]
    quotes:[Quote]
    user(_id:ID!):User
    iquote(by:ID!):[Quote]
  }

  type User{
    _id:ID
    firstName:String
    lastName:String
    email:String
    quotes:[Quote]
  }
  type Quote{
    name:String
    by:ID

  }

  type Mutation {
     
    signupUser(userNew:UserInput!): User
  }
  input UserInput{
    firstName: String!
    lastName: String!
    email: String!
    password: String!

  }
`
