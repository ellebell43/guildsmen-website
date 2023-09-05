import { NextResponse } from "next/server"
import { dbClient } from "@/util/dbClient"
import jwt from "jsonwebtoken"
import { cookies } from "next/dist/client/components/headers"

export async function GET(req: Request) {
  const username = req.headers.get("username")
  const password = req.headers.get("password")
  const cookieSignIn = req.headers.get("cookieSignIn")

  if (cookieSignIn == "true") {
    try {
      const client = await dbClient()
      const users = client.collection("users")
      const user = users.findOne({ token: cookies().get("token") })
      return NextResponse.json({ success: true, user })
    } catch (err) {
      return NextResponse.json({ success: false, message: String(err) })
    }

  } else {
    let data = { success: true, message: "Sign in success!" }

    if (!(username && password)) {
      data.success = false
      data.message = "Sign in failure. Some data was missing."
      return NextResponse.json(data)
    }

    try {
      const client = await dbClient()
      const users = client.collection("users");
      const user = await users.findOne({ username, password })

      if (!user) {
        data.success = false
        data.message = "Incorrect username or password."
        return NextResponse.json(data)
      }

      // create JWT
      const secret = process.env.SECRET;
      const token = jwt.sign({ user: user.username }, secret, { expiresIn: "7d" });
      // Attach the token to the user in the database
      users.updateOne({ username: username }, { $set: { token: token } });

      const res = NextResponse.json(data)
      res.cookies.set("token", token)

      return res

    } catch (err) {
      data.success = false
      data.message = String(err)
      return NextResponse.json(data)
    }
  }
}