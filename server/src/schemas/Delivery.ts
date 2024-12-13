import mongoose, {InferSchemaType} from "mongoose"
import Delivery from "../models/Delivery"

type Delivery = InferSchemaType<typeof Delivery.schema>;

const deliveryResolvers = {
    Query: {
        deliveries: async (): Promise<Delivery[] | null> => {
            return await Delivery.find({});
        },
        delivery: async (_parent: any, { id}: { id: string }): Promise<Delivery> => {
            return await Delivery.findById(id);
        },
    },
    Mutation: {
        createDelivery: async (_parent: any, { input}: { input: any}): Promise<Delivery> => {
            const Delivery = await Delivery.create(input);
            return Delivery;
        },
        updateDelivery: async (_parent: any, { id, input}: { id: string; input: any}
        ): Promise<Delivery | null> => {
            return await Delivery.findByIdAndUpdate(id, input, { new: true });
        },
        
    },
};

export default deliveryResolvers;