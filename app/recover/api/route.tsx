import { NextResponse } from "next/server";
import nodemailer from "nodemailer"
import { dbClient } from "@/util/dbClient";
import crypto from "crypto"

export async function GET(req: Request) {

  const email = req.headers.get("email")
  if (!email) return NextResponse.json({ success: false, message: "No email provided." })
  const updateToken = crypto.createHash("sha256").update(email).digest("hex");

  try {
    const client = await dbClient()
    const users = client.collection("users")
    await users.updateOne({ email }, { "$set": { updateToken } })
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
      text: `We received a request to reset your password. To continue, click the link below. https://guildsmen-ttrpg.com/recover?updateToken=${updateToken}`, // plain text body
      html: `
      <p>We received a request to reset your password. To continue, click the link below.</p>
      <a href="https://guildsmen-ttrpg.com/recover?updateToken=${updateToken}">https://guildsmen-ttrpg.com/recover?updateToken=${updateToken}</a>
      `, // html body
    });
    return NextResponse.json({ message: "Email sent???" })
  } catch (err) {
    return NextResponse.json({ success: false, message: String(err) })
  }
}