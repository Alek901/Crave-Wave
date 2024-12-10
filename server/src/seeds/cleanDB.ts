import models from '../models';
import db from '../config/connection.js';

export default async (modelName: "Meals" | "Matchup", collectionName: string) => {
  try {
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray()

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
