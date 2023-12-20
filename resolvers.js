import mongoose from 'mongoose'
import { quotes, users } from './fakedb.js'
import { randomBytes } from 'crypto'
import bcrypt from 'bcryptjs'
import User from './models/User.js'


// resolver m sara brain hota hai


export const resolvers = {
    Query: {
        users: () => users,
        quotes: () => quotes,
        user: (_, args) => users.find(user => user._id == args._id),
        iquote: (_, args) => quotes.filter(quote => quote.by == args.by)

    },

    User: {
        quotes: (ur) => quotes.filter(quote => quote.by == ur._id)
    },
    Mutation: {
        signupUser: async (_, { userNew }) => {
        //   const _id = randomBytes(5).toString('hex');
        //   console.log('**', _id);
    
          const existingUser = users.find(user => user.email === userNew.email);

          if (existingUser) {
            throw new Error('User already exists');
          }
    
          //hashing the password
         const hashedPassword= await bcrypt.hash(userNew.password,12)
          const newUser =new User({
            ...userNew,
            password:hashedPassword
          });
    
          users.push(newUser);
        //   return newUser;
        return await newUser.save();
        },
      },
     
}