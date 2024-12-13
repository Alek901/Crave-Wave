import mongoose, { InferSchemaType } from "mongoose";
import Restaurant from "../models/Restaurant.js";

type RestaurantType = InferSchemaType<typeof Restaurant.schema>;

const restaurantsResolvers = {
    Query: {
        restaurants: async (): Promise<RestaurantType[] | null> => {
            return await Restaurant.find({});
        },
        restaurant: async (_parent: any, { id }: { id: string }): Promise<RestaurantType | null> => {
            return await Restaurant.findById(id);
        },
    },
    Mutation: {
        createRestaurant: async (_parent: any, { input }: { input: any }): Promise<RestaurantType> => {
            const restaurant = await Restaurant.create(input);
            return restaurant;
        },
        updateRestaurant: async (
            _parent: any,
            { id, input }: { id: string; input: any }
        ): Promise<RestaurantType | null> => {
            return await Restaurant.findByIdAndUpdate(id, input, { new: true });
        },
    },
};

export default restaurantsResolvers;

    