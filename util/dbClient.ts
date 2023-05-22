import { MongoClient } from "mongodb";

export async function dbClient() {
  return (await new MongoClient(process.env.DB_URI).connect()).db("guildsmen");
}