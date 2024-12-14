import mongoose, {InferSchemaType} from "mongoose"
import Orders from "../models/Orders"

type OrdersType = InferSchemaType<typeof Orders.schema>;

cosnt OrdersResolvers = {
    Query: {
        orders: async (): Promise<OrdersType[] | null> => {
            return await Orders.find({});
    },
    order: async (_parent: any, { id }: { id: string}): Promise<OrdersType | null> => {
        return await Orders.findById(id);
    },
},
Mutation: {
    createOrder: async (_parent: any, { input }: { input: any }): Promise<OrdersType> => {
        const newOrder = await Orders.create(input);
        return newOrder;
    },
    updateOrder: async (_parent: any, { id, input }: { id: string; input: any }): Promise<OrdersType | null> => {
        return await Orders.findByIdAndUpdate(id, input, { new: true });
    },
},
}

export default OrdersResolvers;

