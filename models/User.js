// Import mongoose
import mongoose from 'mongoose';

// Define user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create User model based on the schema
const User = mongoose.model('User', userSchema);

// Export the User model
export default User;
