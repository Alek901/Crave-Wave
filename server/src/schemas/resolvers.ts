 

import User from '../models/User.js';
import index from '../models/index.js';
import Meal from '../models/Meals.js';
import Order from '../models/Orders.js';
import Delivery from '../models/Delivery.js'; 
import Restaurant from '../models/Restaurant.js'

const resolvers = {
  Query: {
    meals: async (): Promise<typeof Meal[]> => {
            return await Meal.find({});
    },
    meal: async (_parent: any, { id }: { id: string }): Promise<typeof Meal | null> => {
            return await Meal.findById(id);
    },
   
    Users: async (): Promise<typeof User[]> => {
            return await User.find({});
    },
    User: async (_parent: any, { id }: { id: string }): Promise<typeof User | null> => {
            return await User.findById(id);
    },
  
   
  
    Orders: async (): Promise<typeof Order[]> => {
            return await Order.find({});
    },
    Order: async (_parent: any, { id }: { id: string }): Promise<typeof Order | null> => {
            return await Order.findById(id);
    },
  
  
    Deliverys: async (): Promise<typeof Delivery[]> => {
            return await Delivery.find({});
    },
    Delivery: async (_parent: any, { id }: { id: string }): Promise<typeof Delivery | null> => {
            return await Delivery.findById(id);
    },
  
  Mutation: {
    createUser(input): {
      name: "",
      email: "",
      password: "",
    }
  
  // Mutation: {
  //   createMatchup: async (_parent: any, args: any): Promise<IMatchup | null> => {
  //     const matchup = await Matchup.create(args);
  //     return matchup;
    // },
    // createVote: async (_parent: any, { _id, techNum }: { _id: string, techNum: number}): Promise<IMatchup | null> => {
    //   const vote = await Matchup.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`tech${techNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
  }
  }
}

export default resolvers;