import mongoose, {InferSchemaType} from "mongoose";
import Meal from "../models/Meals.js"

type MealType = InferSchemaType<typeof Meal.schema>;

const mealsResolvers = {
    Query: {
        meals: async (): Promise<MealType[] | null> => {
            return await Meal.find({});
        },
        meal: async (_parent: any, { id }: { id: string }): Promise<MealType | null> => {
            return await Meal.findById(id);
        },
    },
    Mutation: {
        createMeal: async (_parent: any, { input }: { input: any }): Promise<MealType> => {
            const newMeal = await Meal.create(input);
            return newMeal;
        },
        updateMeal: async (_parent: any, { id, input }: { id: string; input: any }): Promise<MealType | null> => {
            return await Meal.findByIdAndUpdate(id, input, { new: true });
        },
    },
};

export default mealsResolvers;