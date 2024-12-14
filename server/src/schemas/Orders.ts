import mongoose, {InferSchemaType} from "mongoose"
import Orders from "../models/Orders"

type OrdersType = InferSchemaType<typeof Orders.schema>;

cosnt OrdersResolvers = {
    Query: {
        orders: async (): Promise<OrdersType[] | null> => {
            return await Orders.find({});
    },
    order: async (_parent: any, { id }: { id: string}): Promise<
}

}