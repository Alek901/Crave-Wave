import mongoose, { InferSchemaType } from "mongoose";
import User from "../models/User"

type UserType = InferSchemaType<typeof User.schema>;


const usersResolvers = {
    Query: {
        users: async (): Promise<UserType[] | null> => {
            return await User.find({});
        },
        user: async (_parent: any, { id }: { id: string }): Promise<UserType | null> => {
            return await User.findById(id);
        },
    },
    Mutation: {
        createUser: async (_parent: any, { input }: { input: any }): Promise<UserType> => {
            const newUser = await User.create(input);
            return newUser;
        },
        updateUser: async (_parent: any, { id, input }: { id: string; input: any }): Promise<UserType | null> => {
            return await User.findByIdAndUpdate(id, input, { new: true });
        },
    },
};