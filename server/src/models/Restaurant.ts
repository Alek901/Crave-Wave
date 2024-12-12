 import { Schema, model, type Document } from 'mongoose';
 
 export interface Restaurant extends Document {
  id: string;
  name: string;
  menu_description: string;
  address: string;
  phone_number: number;
  email: string;
  meal_id: number;
  order_id: number;
  menu_id: number;
  menu_options: string;
  menu_price: number;
  }

  // This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const restaurantSchema = new Schema<Restaurant>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Restaurant = model('Restaurant', restaurantSchema);

export default Restaurant;