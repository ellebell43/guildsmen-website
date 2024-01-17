import { dbClient } from "@/util/dbClient"
import { UpdateResult } from "mongodb"
import { cookies } from "next/dist/client/components/headers"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const token = cookies().get("token")?.value
  if (!token) return NextResponse.json({}, { status: 400, statusText: "No token provided. Please sign in." })

  if (req.headers.get("getAvatarUrl") === "true") {
    try {
      const client = await dbClient()
      const users = client.collection("users")
      const user = await users.findOne({ token })
      if (user) return NextResponse.json(user.avatarUrl)
      if (!user) return NextResponse.json({}, { status: 404, statusText: "User not found with provided token" })
    } catch (err) {
      return NextResponse.json({}, { status: 500, statusText: JSON.stringify(err) })
    }
  }

  if (req.headers.get("getUser") === "true") {
    try {
      const client = await dbClient()
      const users = client.collection("users")
      const user = await users.findOne({ token })
      if (!user) return NextResponse.json({}, { status: 404, statusText: "User not found with provided token" })
      return NextResponse.json(user)
    } catch (err) {
      return NextResponse.json({}, { status: 500, statusText: JSON.stringify(err) })
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
        return NextResponse.json({}, { status: 404, statusText: "User could not be found in the database" })
      }

      return NextResponse.json({})
    } catch (err) {
      return NextResponse.json({}, { status: 500, statusText: JSON.stringify(err) })
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
        return NextResponse.json({}, { status: 404, statusText: "User could not be found in the database" })
      }
    } catch (err) {
      return NextResponse.json({}, { status: 500, statusText: JSON.stringify(err) })
    }

    return NextResponse.json({})
  }
}

// === DELETE METHOD ====

export async function DELETE(req: Request) {
  try {
    const token = cookies().get("token")?.value
    if (!token) {
      return NextResponse.json({}, { status: 400, statusText: "No token found. Please contact support." })
    }
    const client = await dbClient()
    const users = client.collection("users")
    const result = await users.deleteOne({ token })

    if (!result.deletedCount) {
      return NextResponse.json({}, { status: 400, statusText: "No user found with provided token." })
    }

    return NextResponse.json({})

  } catch (err) {
    return NextResponse.json({}, { status: 500, statusText: JSON.stringify(err) })
  }
}