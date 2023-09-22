import { dbClient } from "@/util/dbClient"
import { UpdateResult } from "mongodb"
import { cookies } from "next/dist/client/components/headers"
import { NextResponse } from "next/server"

export async function PATCH(req: Request) {
  const data = { success: true, message: "User updated successfully." }
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
        data.success = false
        data.message = "User could not be found in the database."
        return NextResponse.json(data)
      }

      return NextResponse.json(data)
    } catch (err) {
      data.success = false
      data.message = String(err)
      return NextResponse.json(data)
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
        data.success = false
        data.message = "User could not be found in the database."
        return NextResponse.json(data)
      }
    } catch (err) {
      data.success = false
      data.message = String(err)
      return NextResponse.json(data)
    }

    return NextResponse.json(data)
  }
}

// === DELETE METHOD ====

export async function DELETE(req: Request) {
  const data = { success: true, message: "User deleted successfully." }
  try {
    const token = cookies().get("token")?.value
    if (!token) {
      data.success = false
      data.message = "No token found. Please contact support."
      return NextResponse.json(data)
    }
    const client = await dbClient()
    const users = client.collection("users")
    const result = await users.deleteOne({ token })

    if (!result.deletedCount) {
      data.success = false
      data.message = "No user found with provided token."
      return NextResponse.json(data)
    }

    return NextResponse.json(data)

  } catch (err) {
    data.success = false
    data.message = String(err)
    return NextResponse.json(data)
  }
}