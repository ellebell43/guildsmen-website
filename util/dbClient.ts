import { MongoClient } from "mongodb"

const uri = process.env.DB_URI!

// Module-level promise so subsequent calls reuse the same connection.
// In dev, stash on `global` so HMR doesn't open a new connection on every reload.
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
  const g = global as typeof globalThis & { _mongoClientPromise?: Promise<MongoClient> }
  if (!g._mongoClientPromise) {
    g._mongoClientPromise = new MongoClient(uri).connect()
  }
  clientPromise = g._mongoClientPromise
} else {
  clientPromise = new MongoClient(uri).connect()
}

export async function dbClient() {
  return (await clientPromise).db("guildsmen")
}