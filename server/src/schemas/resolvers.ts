 

import User from '../models/User.js';
import index from '../models/index.js';
import Meal from '../models/Meals.js';
import Orders from '../models/Orders.js';
import Delivery from '../models/Delivery.js'; 

const resolvers = {
  Query: {
    meals: async (): Promise<typeof Meal[]> => {
            return await Meal.find({});
    },
    meal: async (_parent: any, { id }: { id: string }): Promise<typeof Meal | null> => {
            return await Meal.findById(id);
    },
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

export default resolvers;