import { dbClient } from "@/util/dbClient"
import { ObjectId } from "mongodb"
import { NextRequest, NextResponse } from "next/server"
import { Character } from "@/util/types"

export async function GET(req: NextRequest) {

  const id = req.headers.get("id")
  if (!id) {
    return NextResponse.json({ message: "No character id provided" }, { status: 400 })
  }

  const client = await dbClient()
  const characters = client.collection("characters")
  const character = await characters.findOne({ _id: new ObjectId(id) })
  if (!character) {
    return NextResponse.json({ message: "No character found with provided id" }, { status: 404 })
  }

  let token: string | null | undefined = req.cookies.get("token")?.value
  if (!token) token = req.headers.get("token")
  if (!token) return NextResponse.json({ message: "No user token provided. Please sign in and try again" }, { status: 400 })
  const users = client.collection("users")
  const user = await users.findOne({ token })
  if (!user) return NextResponse.json({ message: "No user found with provided toke. Please sign in and try again." }, { status: 404 })
  if (character.owner != user.username && !character.public) return NextResponse.json({ message: "You do not have access to this character" }, { status: 400 })

  return NextResponse.json(character)
}

export async function PATCH(req: NextRequest) {
  const header = req.headers.get("characterToUpdate")
  let character: Character | undefined
  if (header) character = JSON.parse(header)
  if (!character) {
    return NextResponse.json({ message: "No character id provided" }, { status: 400 })
  }

  let token: string | null | undefined = req.cookies.get("token")?.value
  if (!token) token = req.headers.get("token")
  if (!token) {
    return NextResponse.json({ message: "No user token provided. Please sign in and try again." }, { status: 400 })
  }

  const client = await dbClient()
  const users = client.collection("users")
  const user = await users.findOne({ token })
  if (!user) {
    return NextResponse.json({ message: "No user found with provided token. Please sign in and try again" }, { status: 404 })
  }

  if (user.username != character.owner) return NextResponse.json({ message: "You do not have permission to make changes to this character" }, { status: 400 })

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
    return NextResponse.json({ message: "No character found with provided id. Character update failed" }, { status: 404 })
  }

  return NextResponse.json({ message: "Character updated successfully" })
}