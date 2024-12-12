import  { Restaurant } from "../models/Restaurant"

const restaurantsResolvers = {
   Query: {
        restaurants: async (): Promise<Restaurant[] | null> => {
            return Restaurant.find({})
        },
        restaurant: async (_parent: any, { id }: { id: string }): Promise<Restaurant | null> => {
            return await Restaurant.findById(id)
        },    },
    Mutation: {
        createRestaurant: async (_parent: any, { input }: { input: any }): Promise<Restaurant> => {
            const restaurant = await Restaurant.create(input)
            return restaurant
        }    },
    updateRestaurant: async (_parent: any, args: any): Promise<Restaurant | null> => {
        const restaurant = await Restaurant.findByIdAndUpdate(id, input, { new: true })
    },
}


export default restaurantsResolvers

    