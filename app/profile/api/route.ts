import { dbClient } from "@/util/dbClient"
import { cookies } from "next/dist/client/components/headers"
import { NextResponse } from "next/server"

export async function PATCH(req: Request) {
  const data = { success: true, message: "User updated successfully." }
  const token = cookies().get("token")?.value
  if (req.headers.get("updateAvatar") == "true") {
    try {
      const client = await dbClient()
      const users = client.collection("users")
      const result = await users.updateOne({ token }, { "$set": { avatarUrl: req.headers.get("avatarUrl") } })

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
  }

  return NextResponse.json(data)
}