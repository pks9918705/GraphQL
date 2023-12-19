import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// import {quotes,users} from './fakedb'

const users = [
    {
      id: "123",
      firstname: "priyanshu",
      lastname: "kumar singh",
      email: "priyanshu@gmail.com",
      password: "password123",
    },
    {
      id: "124",
      firstname: "john",
      lastname: "doe",
      email: "john.doe@example.com",
      password: "johns_password",
    },
    {
      id: "125",

      firstname: "alice",
      lastname: "smith",
      email: "alice.smith@example.com",
      password: "alices_password",
    },
 
  ];
const quotes=[
    {
        name:"this is the first person",
        by:"124"
    },
    {
        name:"this is the last person",
        by:"125"
    },
    {
        name:"this is the first person",
        by:"125"
    },
    {
        name:"this is the last person",
        by:"125"
    }
  ]

//schema
 //client side se hmlog server m kya query kr skte hain
const typeDefs=`#graphql
 
  type Query{
    users:[User]
    quotes:[Quote]
    user(id:ID!):User
    iquote(by:ID!):[Quote]
  }

  type User{
    id:ID
    firstName:String
    lastName:String
    email:String
    quotes:[Quote]
  }
  type Quote{
    name:String
    by:ID

  }
`

// resolver m sara brain hota hai
const resolvers={
    Query:{
        users:()=>users,
        quotes:()=>quotes,
        user:(_,args)=>users.find(user=>user.id==args.id),
        iquote:(_,args)=>quotes.filter(quote=>quote.by==args.by)

    },

    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by==ur.id)
    }
}

const server=new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);