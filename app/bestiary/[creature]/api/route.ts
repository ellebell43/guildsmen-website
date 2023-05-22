import { NextResponse } from "next/server";
import { dbClient } from "@/util/dbClient";

export async function GET(req: Request) {
  const creatureParam = req.headers.get("creature-name");
  const creatureName = creatureParam?.replace(/-/, " ");
  let data: { success: boolean, data: any };

  try {
    const client = await dbClient()
    const creatures = client.collection("creatures");
    const results = await creatures.find({ name: creatureName, owner: "official" }).project({ _id: 0 }).toArray();
    if (results[0]) {
      data = { success: true, data: JSON.stringify(results[0]) }
    } else {
      data = { success: false, data: "No creature found" }
    }
  } catch (err) {
    console.log(err);
    data = { success: false, data: err };
  }

  return NextResponse.json(data);
}