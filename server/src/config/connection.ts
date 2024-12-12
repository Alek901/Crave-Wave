import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Crave Wave');

const db = mongoose.connection;

export default mongoose.connection;
