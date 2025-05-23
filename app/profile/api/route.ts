import { dbClient } from "@/util/dbClient"
import { UpdateResult } from "mongodb"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  let token: string | null | undefined = req.cookies.get("token")?.value
  if (!token) token = req.headers.get("token")
  if (!token) return NextResponse.json({ message: "No user token provided" }, { status: 400 })

  if (req.headers.get("getAvatarUrl") === "true") {
    try {
      const client = await dbClient()
      const users = client.collection("users")
      const user = await users.findOne({ token })
      if (user) return NextResponse.json(user.avatarUrl)
      if (!user) return NextResponse.json({ message: "User not found with provided token" }, { status: 404 })
    } catch (err) {
      return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 })
    }
  }

  if (req.headers.get("getUser") === "true") {
    try {
      const client = await dbClient()
      const users = client.collection("users")
      const user = await users.findOne({ token })
      if (!user) return NextResponse.json({ message: "User not found with provided token" }, { status: 404 })
      return NextResponse.json(user)
    } catch (err) {
      return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 })
    }
  }

  return NextResponse.json({})

}

export async function PATCH(req: NextRequest) {
  let token: string | null | undefined = req.cookies.get("token")?.value
  if (!token) token = req.headers.get("token")
  // === UPDATE AVATAR URL ===
  if (req.headers.get("updateAvatar") == "true" || req.headers.get("updateBio") === "true") {
    const avatarUrl = req.headers.get("avatarUrl")
    const bio = req.headers.get("bio")

    try {
      const client = await dbClient()
      const users = client.collection("users")
      let result: UpdateResult<Document>

      if (avatarUrl) {
        result = await users.updateOne({ token }, { "$set": { avatarUrl } })
      } else {
        result = await users.updateOne({ token }, { "$set": { bio } })
      }

      if (!result.matchedCount) {
        return NextResponse.json({ message: "User could not be found in the database" }, { status: 404 })
      }

      return NextResponse.json({})
    } catch (err) {
      return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 })
    }
  } else {
    // === UPDATE PROFILE EMAIL OR PASSWORD ===
    try {
      const client = await dbClient()
      const users = client.collection("users")
      let result: any
      if (req.headers.get("updateEmail")) {
        result = await users.updateOne({ token }, { "$set": { email: req.headers.get("email") } })
      } else if (req.headers.get("updatePassword")) {
        result = await users.updateOne({ token }, { "$set": { password: req.headers.get("password") } })
      }

      if (!result.matchedCount) {
        return NextResponse.json({ message: "User could not be found in the database" }, { status: 404 })
      }
    } catch (err) {
      return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 })
    }

    return NextResponse.json({})
  }
}

// === DELETE METHOD ====

export async function DELETE(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value
    if (!token) {
      return NextResponse.json({ message: "No user token found" }, { status: 400 })
    }
    const client = await dbClient()
    const users = client.collection("users")
    const user = await users.findOne({ token })
    // Make sure user was found
    if (!user) return NextResponse.json({ message: "No user found with provided token" }, { status: 400 })
    // delete user
    users.deleteOne({ token })
    // delete owned characters
    const characters = client.collection("characters")
    await characters.deleteMany({ owner: user.username })
    //delete templates
    const templates = client.collection("templates")
    await templates.deleteMany({ owner: user.username })

    return NextResponse.json({})

  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 })
  }
}