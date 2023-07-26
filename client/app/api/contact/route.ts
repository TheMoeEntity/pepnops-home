// require("dotenv").config();
import { NextRequest, NextResponse } from "next/server";
const fs = require("fs");
export async function POST(req: NextRequest, res: NextResponse) {
  const { fullName, email, phone, message, choise, budget, file } =
    await req.json();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
    secure: true,
  });
  let mailData = {
    from: "PEPNOPS Contact form",
    to: "mosesnwigberi@gmail.com",
    attachments: [
      {
        filename: "Resume.pdf",
        path: file,
      },
    ],
    subject: `You have a message from ${fullName} in the PEPNOPS Contact form`,
    text: message + "| Sent from: " + email,
    html: `<div>
                ${message}
                </div><p>Sent from: ${email} <br />
                Sender's phone: ${phone} <br />
                Sender's choice: ${choise} <br />
                Sender's budget: ${budget}
                `,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        console.log("This is the error" + err);
        reject("This is the error" + err);
      } else {
        resolve(info);
        return NextResponse.json({ error: "All Done" }, { status: 20 });
      }
    });
  });
  return NextResponse.json({ error: "All Done" }, { status: 200 });
}
