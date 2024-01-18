import { NextResponse } from "next/server";
import nodemailer from "nodemailer"
import { dbClient } from "@/util/dbClient";
import jwt from "jsonwebtoken"

export async function GET(req: Request) {

  const email = req.headers.get("email")
  if (!email) return NextResponse.json({ success: false, message: "No email provided." })
  const token = jwt.sign({ email: email }, process.env.SECRET, { expiresIn: "1h" });


  try {
    const client = await dbClient()
    const users = client.collection("users")
    await users.updateOne({ email }, { "$set": { updateToken: token } })
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.com",
    port: 587,
    auth: {
      user: "no-reply@guildsmen-ttrpg.com",
      pass: process.env.EMAIL_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: '"Guildsmen | Account Recovery" <no-reply@guildsmen-ttrpg.com>', // sender address
      to: email, // list of receivers
      subject: "Password Recovery", // Subject line
      text: `We received a request to reset your password. To continue, click the link below. https://guildsmen-ttrpg.com/recover?updateToken=${token}`, // plain text body
      html: `
      <p>We received a request to reset your password. To continue, click the link below.</p>
      <a href="https://guildsmen-ttrpg.com/recover?updateToken=${token}">https://guildsmen-ttrpg.com/recover?updateToken=${token}</a>
      `, // html body
    });
    return NextResponse.json({ message: "Email sent successfully" })
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 })
  }
}

// === UPDATE PASSWORD VIA UPDATE TOKEN ===
export async function PATCH(req: Request) {
  const updateToken = req.headers.get("updateToken")
  const password = req.headers.get("password")

  if (!(password && updateToken)) {
    return NextResponse.json({ message: "Missing data to complete request" }, { status: 400 })
  }

  try {
    const client = await dbClient()
    const users = client.collection("users")
    const result = await users.updateOne({ updateToken }, { "$set": { updateToken: "", password } })

    if (!result.matchedCount) {
      return NextResponse.json({ message: "No user found with provided token. Please restart the recovery process." }, { status: 500 })
    }

    return NextResponse.json({ message: "Update successful" })
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 })
  }
}