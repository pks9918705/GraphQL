import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {quotes,users} from './fakedb.js'
import {typeDefs} from './schemaGql.js'
import {resolvers} from './resolvers.js'

import mongoose from 'mongoose';



const mongoDBURI = "mongodb+srv://pks9918705:k9J2k0m9dgKR5Jyv@cluster0.xgw7gvw.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Check if the connection is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
const server=new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  
  console.log(`🚀  Server ready at: ${url}`);

//   k9J2k0m9dgKR5Jyv
//   mongodb+srv://pks9918705:k9J2k0m9dgKR5Jyv@cluster0.xgw7gvw.mongodb.net/?retryWrites=true&w=majority