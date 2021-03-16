import { MongoClient, Db } from 'mongodb';

let cachedDb: Db = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const dbName = 'pomodesk';

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}