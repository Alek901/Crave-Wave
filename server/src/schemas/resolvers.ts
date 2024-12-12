 

import User from '../models/User.js';
import index from '../models/index.js';
import Meals from '../models/Meals.js';
import Orders from '../models/Orders.js';
import Delivery from '../models/Delivery.js';
import Tech from '../models/Delivery.js'; 

const resolvers = {
  Query: {
    Meals: async (): Promise<any[] | null> => {
      return Meals.find({});
    },
    // matchups: async (_parent: any, { _id }: { _id: string }): Promise<IMatchup[] | null> => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },
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