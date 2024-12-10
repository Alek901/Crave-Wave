import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from '../routes/api/user-routes';

const app = express();

app.use(bodyParser.json());
app.use('/api', userRoutes);

const PORT = 5000;
const MONGO_URI = 'your_mongo_connection_string';

mongoose
  .connect(MONGO_URI, {})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Database connection error:', err));
