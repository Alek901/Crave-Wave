import {Schema, model, type Document} from 'mongoose';

export interface IOrder extends Document {
    name: string;
    order: string;
}
const OrderSchema = new Schema<IOrder>({
    orderId: { type: String },
    userId: { type: String },
    description: { type: String },
    billing_price: { type: Number },
    total_price: { type: Number },
    status: { type: String },
    billing_address: { type: String }
});

const Order = model('Order', OrderSchema); 
export default { Order };
