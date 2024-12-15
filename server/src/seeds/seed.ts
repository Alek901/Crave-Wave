import db from '../config/connection.js';
import { Delivery, Meals, Restaurant, Order } from '../models/index.js';
import mealSeeds from './mealData.json' with { type: "json" };
import cleanDB from './cleanDB.js';

// Define the type of mealSeeds based on your schema
type MealSeedType = {
  name: string;
  price: number;
  description?: string;
  id?: string; // Optional, remove if not needed
};

const mealsData: MealSeedType[] = mealSeeds as unknown as MealSeedType[];

const seedDatabase = async (): Promise<void> => {
  try {
    await db();
    await cleanDB();

    // Ensure unique ids or remove id field
    const transformedMealsData = mealsData.map((meal) => {
      const { id, ...rest } = meal; // Remove `id` if unnecessary
      return rest; // MongoDB will automatically assign a unique _id
    });

    await Meals.insertMany(transformedMealsData);
    await Delivery.insertMany(transformedMealsData); // Adjust schema if needed
    await Restaurant.insertMany(transformedMealsData); // Adjust schema if needed

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

// const seedDatabase = async (): Promise<void> => {
//   try {
//     await db();
//     await cleanDB();
//     await Meals.insertMany(mealSeeds);
//     await Delivery.insertMany(mealSeeds);
//     await Restaurant.insertMany(mealSeeds);

//     console.log('Seeding completed successfully!');
//     process.exit(0);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error('Error seeding database:', error.message);
//     } else {
//       console.error('Unknown error seeding database');
//     }
//     process.exit(1);
//   }
// };

// seedDatabase();

