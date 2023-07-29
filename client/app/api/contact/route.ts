// require("dotenv").config();
import { Helpers, replacements } from "@/helpers";
import { createHTMLToSend } from "@/helpers/mail";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

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
  const emailPath = path.resolve("app/api/contact/Email-template", "mail.html");
  const replacements: replacements = {
    name: fullName,
    message,
    phone,
    email,
    budget,
    greeting: Helpers.setGreeting(),
    choice: choise,
  };
  let htmlToSend = createHTMLToSend(emailPath, replacements);
  let mailData = {
    from: "PEPNOPS Contact form",
    to: "mosesnwigberi@gmail.com",
    attachments: [
      {
        filename: "Resume.pdf",
        path: file,
      },
    ],
    subject: `New message from ${fullName} in the PEPNOPS Contact form`,
    html: htmlToSend,
    text: message + "| Sent from: " + email,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        console.log("This is the error: " + err);
        reject("This is the error: " + err);
      } else {
        resolve(info);
        return NextResponse.json({ error: "All Done" }, { status: 20 });
      }
    });
  });
  return NextResponse.json({ error: "All Done" }, { status: 200 });
}
