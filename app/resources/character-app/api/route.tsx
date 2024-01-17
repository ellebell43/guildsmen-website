import { dbClient } from "@/util/dbClient"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"
import { cookies } from "next/dist/client/components/headers"
import { Character } from "@/util/types"

export async function GET(req: Request) {

  const id = req.headers.get("id")
  if (!id) {
    return NextResponse.json({}, { status: 400, statusText: "No character id provided" })
  }

  const client = await dbClient()
  const characters = client.collection("characters")
  const character = await characters.findOne({ _id: new ObjectId(id) })
  if (!character) {
    return NextResponse.json({}, { status: 404, statusText: "No character found with provided id." })
  }

  const token = cookies().get("token")?.value
  if (!token) return NextResponse.json({}, { status: 400, statusText: "No user token provided. Please sign in to continue" })
  const users = client.collection("users")
  const user = await users.findOne({ token })
  if (!user) return NextResponse.json({}, { status: 404, statusText: "No user found with provided token. Please sign in to continue." })
  if (character.owner != user.username && !character.public) return NextResponse.json({}, { status: 400, statusText: "You don't have access to this character" })

  return NextResponse.json(character)
}

export async function PATCH(req: Request) {
  const header = req.headers.get("characterToUpdate")
  let character: Character | undefined
  if (header) character = JSON.parse(header)
  if (!character) {
    return NextResponse.json({}, { status: 400, statusText: "No character id provided" })
  }

  const token = cookies().get("token")?.value // Get user token from cookies for use in finding username of user
  if (!token) {
    return NextResponse.json({}, { status: 400, statusText: "No authentication token provided" })
  }

  const client = await dbClient()
  const users = client.collection("users")
  const user = await users.findOne({ token })
  if (!user) {
    return NextResponse.json({}, { status: 404, statusText: "No user found with provided authentication token" })
  }

  if (user.username != character.owner) return NextResponse.json({}, { status: 400, statusText: "You do not have permission to make changes to this character" })

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
    return NextResponse.json({}, { status: 404, statusText: "No character found with provided id. Character update failed." })
  }

  return NextResponse.json({})
}