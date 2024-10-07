import User from "@/models/user.model";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import dbConnect from "@/lib/dbConnect";


export const sendEmail = async ({ email, subject, userId }: any) => {
await dbConnect();
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    if (subject !== "VERIFY") {
      await User.findOneAndUpdate(userId, { verifyToken: hashedToken, verifyExpire: Date.now() + 3600000 });
    }else if(subject === "RESET"){
      await User.findOneAndUpdate(userId, { forgetPasswordToken: hashedToken, forgetPasswordExpire: Date.now() + 3600000 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    const mailOptions = {
      from: "maddison53@ethereal.email",
      to: email,
      subject: subject === "VERIFY" ? "Verify Your Email" : "Reset Your Password",
      html: `<b>${userId}</b>`,

    }

    const mailResponse = await transporter.sendMail(mailOptions)
    return mailResponse;

  }
  catch (err: any) {
    throw new Error(err);
  }
}