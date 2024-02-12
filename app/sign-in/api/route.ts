import { NextResponse } from "next/server"
import { dbClient } from "@/util/dbClient"
import jwt from "jsonwebtoken"
import { cookies } from "next/dist/client/components/headers"

export async function GET(req: Request) {
  const username = req.headers.get("username")
  const password = req.headers.get("password")
  const cookieSignIn = req.headers.get("cookieSignIn")

  // If cookieSignIn, then use the token stored in clients cookies to return user data
  if (cookieSignIn == "true") {
    try {
      // Connect to the database and find user via token
      const client = await dbClient()
      const users = client.collection("users")
      const user = await users.findOne({ token: cookies().get("token")?.value })
      // If no user is found, return an error message
      if (!user) {
        return NextResponse.json({ message: "No user found with provided token" }, { status: 404 })
      }
      // Otherwise, return user data and refresh the age of the token to keep the user signed in up for up to a week of inactivity
      const res = NextResponse.json({ user })
      res.cookies.set({ name: "token", value: cookies().get("token")?.value || "", maxAge: 60 * 60 * 24 * 7 })
      return res
    } catch (err) {
      return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 })
    }

  } else {
    // If signing in via username and password instead of token:

    // If a username and password aren't provided via headers, return an error
    if (!(username && password)) {
      return NextResponse.json({ message: "Username or password was not provided." }, { status: 400 })
    }

    try {
      // Connect to the database and find a user that matches bother the username and password
      const client = await dbClient()
      const users = client.collection("users");
      const user = await users.findOne({ username, password })

      // If no username is found, return an error
      if (!user) {
        return NextResponse.json({ message: "Incorrect username or password" }, { status: 400 })
      }

      // otherwise, create JWT
      const secret = process.env.SECRET;
      const token = jwt.sign({ user: user.username }, secret, { expiresIn: "7d" });
      // Attach the token to the user in the database
      users.updateOne({ username: username }, { $set: { token: token } });

      // Set the created token as a cookie
      const res = NextResponse.json({})
      res.cookies.set({ name: "token", value: token, maxAge: 60 * 60 * 24 * 7 })

      return res

    } catch (err) {
      // If an error occurs while connected and updated the database, return the error
      return NextResponse.json({ message: JSON.stringify(err) }, { status: 500, statusText: JSON.stringify(err) })
    }
  }
}