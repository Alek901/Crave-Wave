import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

async function db() {
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Database connection failed:', error);
        throw new Error('Database connection failed.');
    }
}

export default db;

// import dotenv from 'dotenv';
// dotenv.config();

// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI || '';

// const db = async (): Promise<typeof mongoose.connection> => {
//   console.log(MONGODB_URI)
//   try {
//     await mongoose.connect(MONGODB_URI);
//     console.log('Database connected.');
//     return mongoose.connection;
//   } catch (error) {
//     console.error('Database connection error:', error);
//     throw new Error('Database connection failed.');
//   }
// };

// export default db;
