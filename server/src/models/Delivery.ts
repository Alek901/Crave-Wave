import { Schema, model, type Document } from 'mongoose';

export interface Delivery extends Document {
  id: string;
  customer_id: number;
  order_id: number;
  meal_id: number;
  delivery_time: string;
  delivery_address: string;
  delivery_status: string;
  delivery_price: number;
  delivery_data: string;
  }

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const deliverySchema = new Schema<Delivery>({
});

const Delivery = model('Delivery', deliverySchema);

export default Delivery;