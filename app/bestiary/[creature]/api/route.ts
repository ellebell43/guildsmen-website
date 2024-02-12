import { NextResponse } from "next/server";
import { dbClient } from "@/util/dbClient";

export async function GET(req: Request) {
  const creatureParam = req.headers.get("creature-name");
  const creatureName = creatureParam?.replace(/-/, " ");

  try {
    const client = await dbClient()
    const creatures = client.collection("creatures");
    const results = await creatures.find({ name: creatureName, owner: "official" }).project({ _id: 0 }).toArray();
    if (results[0]) {
      return NextResponse.json(results[0])
    } else {
      return NextResponse.json({ message: "No creature found with provided name" }, { status: 404 })
    }
  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 })
  }
}