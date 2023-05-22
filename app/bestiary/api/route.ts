import { NextResponse } from "next/server";
import { dbClient } from "@/util/dbClient";

export async function GET(req: Request) {
  const creatureType = req.headers.get("creature-type");
  let dataToReturn: any;
  let success = false;
  try {
    const client = await dbClient()
    const creatures = client.collection("creatures");
    dataToReturn = await creatures.find({ owner: "official", type: creatureType }).project({ name: 1 }).sort({ name: 1 }).toArray();
    dataToReturn[0] ? success = true : success = false;
  } catch (err) {
    console.log(err);
    dataToReturn = err;
    success = false;
  }

  return NextResponse.json({ success, data: dataToReturn })
}