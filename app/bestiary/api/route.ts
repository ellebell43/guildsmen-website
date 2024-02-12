import { NextResponse } from "next/server";
import { dbClient } from "@/util/dbClient";

export async function GET(req: Request) {
  const creatureType = req.headers.get("creature-type");
  try {
    const client = await dbClient()
    const creatures = client.collection("creatures");
    const creatureList = await creatures.find({ owner: "official", type: creatureType }).project({ name: 1 }).sort({ name: 1 }).toArray();
    if (creatureList[0]) return NextResponse.json(creatureList)
    return NextResponse.json("Nothing here yet. Check back later!")
  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 })
  }
}