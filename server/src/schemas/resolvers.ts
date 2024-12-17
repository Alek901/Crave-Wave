import User from '../models/User.js';
import Meal from '../models/Meals.js';
import Order from '../models/Orders.js';
import Delivery from '../models/Delivery.js'; 
import Restaurant from '../models/Restaurant.js'

const resolvers = {
  Query: {
    meals: async (): Promise<any[]> => {
            return await Meal.find({});
    },
    meal: async (_parent: any, { id }: { id: string }): Promise<any | null> => {
            return await Meal.findById(id);
    },
   
    Users: async (): Promise<any[]> => {
            return await User.find({});
    },
    User: async (_parent: any, { id }: { id: string }): Promise<any | null> => {
            return await User.findById(id);
    },
  
   
  
    Orders: async (): Promise<any[]> => {
            return await Order.find({});
    },
    Order: async (_parent: any, { id }: { id: string }): Promise<any | null> => {
            return await Order.findById(id);
    },
  
  
    Deliverys: async (): Promise<any[]> => {
            return await Delivery.find({});
    },
    Delivery: async (_parent: any, { id }: { id: string }): Promise<any | null> => {
            return await Delivery.findById(id);
    },
    Restaurants: async (): Promise<any[]> => {
            return await Restaurant.find({});
    },
    Restaurant: async (_parent: any, { id }: { id: string }): Promise<any | null> => {
            return await Restaurant.findById(id);
    },
  },


    Mutation: {
      createUser: async (_parent: any, { input }: { input: any }): Promise<any> => {
            return await User.create(input);
      },
        
      updateUser: async (_parent: any, { id, input }: { id: string; input: any }): Promise<any | null> => {
            return await User.findByIdAndUpdate(id, input, { new: true });
      },
        
      createMeal: async (_parent: any, { input }: { input: any }): Promise<any> => {
            return await Meal.create(input);
      },
        
      updateMeal: async (_parent: any, { id, input }: { id: string; input: any }): Promise<any | null> => {
            return await Meal.findByIdAndUpdate(id, input, { new: true });
      },
        
      createOrder: async (_parent: any, { input }: { input: any }): Promise<any> => {
            return await Order.create(input);
      },
        
      updateOrder: async (_parent: any, { id, input }: { id: string; input: any }): Promise<any | null> => {
            return await Order.findByIdAndUpdate(id, input, { new: true });
      },
        
      createDelivery: async (_parent: any, { input }: { input: any }): Promise<any> => {
            return await Delivery.create(input);
      },
        
      updateDelivery: async (_parent: any, { id, input }: { id: string; input: any }): Promise<any | null> => {
            return await Delivery.findByIdAndUpdate(id, input, { new: true });
      },
    },
  }

export default resolvers;