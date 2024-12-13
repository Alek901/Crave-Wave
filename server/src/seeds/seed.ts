import db from '../config/connection.js';
import Meals from '../models/index.js';
import Delivery from '../models/index.js';
import Restaurant from '../models/index.js';
import mealSeeds from './mealData.json' assert { type: "json" };
import cleanDB from './cleanDB.js';

const seedDatabase = async (): Promise<void> => {
  try {
    await db();
    await cleanDB();
    await Meals.insertMany(mealSeeds);
    await Delivery.insertMany(mealSeeds);
    await Restaurant.insertMany(mealSeeds);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error seeding database:', error.message);
    } else {
      console.error('Unknown error seeding database');
    }
    process.exit(1);
  }
};

seedDatabase();
