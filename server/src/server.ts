import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import path from 'path'; // Use 'path' from the default module for compatibility
import { fileURLToPath } from 'url'; // For resolving __dirname in ES Modules
import db from './config/connection.js';
import routes from './routes/index.js';
import typeDefs from './schemas/typeDefs.js';
import resolvers from './schemas/resolvers.js';

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});



const startApolloServer = async () => {
  await server.start();
  await db();
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/graphql', expressMiddleware(server));

// Resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/dist')));
// }

// Routes
app.use(routes);

// Connect to the database and start the server
(async () => {
  try {
    await db(); // Ensure database connection is successful
    app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process if the database connection fails
  }
})();
}

startApolloServer();
