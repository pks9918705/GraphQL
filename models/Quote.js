// Import mongoose
import mongoose from 'mongoose';

// Define user schema
const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
   by:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   }
});

// Create User model based on the schema
const User = mongoose.model('Quote',quoteSchema);

// Export the User model
export default Quote;
