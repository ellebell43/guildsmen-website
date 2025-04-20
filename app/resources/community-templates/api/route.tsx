import { dbClient } from "@/util/dbClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const client = await dbClient()
  const collection = client.collection("templates")

  let list = await collection.find({ "character.public": true }, { sort: { "dateCreated": -1 } }).toArray()

  return NextResponse.json(list)
}