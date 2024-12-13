import { Delivery, Meals, Restaurant, Order } from '../models/index.js';

const cleanDB = async (): Promise<void> => {
  try {
    await Delivery.deleteMany({});
    await Meals.deleteMany({});
    await Restaurant.deleteMany({});
    console.log('DB cleaned.');
    
  } catch (err) {
    console.error('Error cleaning DB:', err);
    process.exit(1);
  }
};

export default cleanDB;
