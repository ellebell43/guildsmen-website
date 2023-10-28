import { dbClient } from "@/util/dbClient"
import { ObjectId, WithId, Document } from "mongodb"
import { NextResponse } from "next/server"
import { cookies } from "next/dist/client/components/headers"
import { Character } from "@/util/types"

export async function GET(req: Request) {

  const id = req.headers.get("id")
  if (!id) {
    return NextResponse.json({ error: "No character id provided" }, { status: 400 })
  }

  const client = await dbClient()
  const characters = client.collection("characters")
  const character = await characters.findOne({ _id: new ObjectId(id) })
  if (!character) {
    return NextResponse.json({ error: "No character found with id provided" }, { status: 400 })
  }

  return NextResponse.json(character)
}

export async function PATCH(req: Request) {
  const header = req.headers.get("characterToUpdate")
  let character: Character | undefined
  if (header) character = JSON.parse(header)
  if (!character) {
    return NextResponse.json({ error: "No character id provided" }, { status: 400 })
  }

  const token = cookies().get("token")?.value // Get user token from cookies for use in finding username of user
  if (!token) {
    return NextResponse.json({ error: "No authentication token provided" }, { status: 400 })
  }

  const client = await dbClient()
  const users = client.collection("users")
  const user = await users.findOne({ token })
  if (!user) {
    return NextResponse.json({ error: "No user found with provided authentication token" }, { status: 400 })
  }

  const updateObject = {
    "$set": {
      name: character.name,
      species: character.species,
      demeanor: character.demeanor,
      physique: character.physique,
      skills: character.skills,
      stats: character.stats,
      wealth: character.wealth,
      luck: character.luck,
      guild: character.guild,
      addiction: character.addiction,
      goalsAndMotive: character.goalsAndMotive,
      flawsAndWeaknesses: character.flawsAndWeaknesses,
      personalMorals: character.personalMorals,
      importantConnections: character.importantConnections,
      harm: character.harm,
      dying: character.dying,
      gear: character.gear,
      experience: character.experience,
      experienceProgress: character.experienceProgress,
      notes: character.notes,
      backstory: character.backstory,
      mythUses: character.mythUses,
      specialties: character.specialties,
      public: character.public
    }
  }

  const characters = client.collection("characters")
  const updateResult = await characters.updateOne({ _id: new ObjectId(character._id) }, updateObject)

  if (!updateResult.matchedCount) {
    return NextResponse.json({ error: "No character found with id provided" }, { status: 400 })
  }

  return NextResponse.json({ message: "Character update successful" }, { status: 200 })
}