import { dbClient } from "@/util/dbClient"
import { UpdateResult } from "mongodb"
import { cookies } from "next/dist/client/components/headers"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const token = cookies().get("token")?.value
  if (!token) return NextResponse.json(Error("No token provided. Please sign in"), { status: 400 })

  if (req.headers.get("getAvatarUrl") === "true") {
    try {
      const client = await dbClient()
      const users = client.collection("users")
      const user = await users.findOne({ token })
      if (user) return NextResponse.json(user.avatarUrl)
      if (!user) return NextResponse.json(Error("User not found with provided token"), { status: 404 })
    } catch (err) {
      return NextResponse.json(err, { status: 500 })
    }
  }

  if (req.headers.get("getUser") === "true") {
    try {
      const client = await dbClient()
      const users = client.collection("users")
      const user = await users.findOne({ token })
      if (user) return NextResponse.json(user)
      if (!user) return NextResponse.json(Error("User not found with provided token"), { status: 404 })
    } catch (err) {
      return NextResponse.json(err, { status: 500 })
    }
  }

  return NextResponse.json({})

}

export async function PATCH(req: Request) {
  const token = cookies().get("token")?.value
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
        return NextResponse.json(new Error("User could not be found in the database"), { status: 404 })
      }

      return NextResponse.json({})
    } catch (err) {
      return NextResponse.json(err, { status: 500 })
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
        return NextResponse.json(new Error("User could not be found in the database"), { status: 404 })
      }
    } catch (err) {
      return NextResponse.json(err, { status: 500 })
    }

    return NextResponse.json({})
  }
}

// === DELETE METHOD ====

export async function DELETE(req: Request) {
  try {
    const token = cookies().get("token")?.value
    if (!token) {
      return NextResponse.json(new Error("No token found. Please contact support."), { status: 400 })
    }
    const client = await dbClient()
    const users = client.collection("users")
    const result = await users.deleteOne({ token })

    if (!result.deletedCount) {
      return NextResponse.json(new Error("No user found with provided token."), { status: 400 })
    }

    return NextResponse.json({})

  } catch (err) {
    return NextResponse.json(err, { status: 500 })
  }
}