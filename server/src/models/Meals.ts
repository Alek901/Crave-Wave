import { Schema, type Document } from 'mongoose';

export interface schema extends schema {
  user: string;
  email: string;
  password: string[];
  }

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const foodSchema = new Schema<FoodDocument>({
  user: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

export default foodSchema;
