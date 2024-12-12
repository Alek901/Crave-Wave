import { Schema, model, type Document } from 'mongoose';

export interface Meals extends Document {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  combo: string;
  }    

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const mealSchema = new Schema<Meals>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Meals = model('Meals', mealSchema);

export default Meals;