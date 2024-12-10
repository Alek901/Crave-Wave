import {Schema, model, type document} from 'mongoose';

export interface IOrder extends Document {
    orderId: string;
    name: string;
    
}



















const Order = model('Order', orderSchema); 
export default { Order };
