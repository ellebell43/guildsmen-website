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
    return NextResponse.json({ success: false, message: String(err) })
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
    return NextResponse.json({ success: true, message: "Email sent." })
  } catch (err) {
    return NextResponse.json({ success: false, message: String(err) })
  }
}

// === UPDATE PASSWORD VIA UPDATE TOKEN ===
export async function PATCH(req: Request) {
  let data = { success: true, message: "Password updated successfully." }
  const updateToken = req.headers.get("updateToken")
  const password = req.headers.get("password")

  if (!(password && updateToken)) {
    data.success = false
    data.message = "Missing data to complete request."
    return NextResponse.json(data)
  }

  try {
    const client = await dbClient()
    const users = client.collection("users")
    const result = await users.updateOne({ updateToken }, { "$set": { updateToken: "", password } })

    if (!result.matchedCount) {
      data.success = false
      data.message = "Invalid token provided. Please restart the recovery process."
      return NextResponse.json(data)
    }

    return NextResponse.json(data)
  } catch (err) {
    data.success = false
    data.message = String(err)
    return NextResponse.json(data)
  }
}