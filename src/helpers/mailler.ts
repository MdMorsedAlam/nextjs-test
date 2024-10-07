import User from "@/models/user.model";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import dbConnect from "@/lib/dbConnect";


export const sendEmail = async ({ email, subject, userId }: any) => {
  await dbConnect();
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    if (subject === "VERIFY") {
      await User.findOneAndUpdate({ _id: userId }, { verifyToken: hashedToken, verifyExpire: Date.now() + 3600000 });
    } else if (subject === "RESET") {
      await User.findOneAndUpdate({ _id: userId }, { forgetPasswordToken: hashedToken, forgetPasswordExpire: Date.now() + 3600000 });
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ce10ffaa6b3c9f",
        pass: "dc9590a237e9ec"
      }
    });

    const verifyEmailData = `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">Here</a> to ${subject === "VERIFY" ? "Verify Your Email" : "Reset Your Password"} or copy and paste this link in your browser <br />${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`;
    const resetData = `<p>Click <a href="${process.env.DOMAIN}/resetpassword?token=${hashedToken}">Here</a>to ${subject === "VERIFY" ? "Verify Your Email" : "Reset Your Password"} or copy and paste this link in your browser <br />${process.env.DOMAIN}/resetpassword?token=${hashedToken}</p>`

    const mailOptions = {
      from: "maddison53@ethereal.email",
      to: email,
      subject: subject === "VERIFY" ? "Verify Your Email" : "Reset Your Password",
      html: subject === "VERIFY" ? verifyEmailData : resetData,

    }

    const mailResponse = await transport.sendMail(mailOptions)
    return mailResponse;

  }
  catch (err: any) {
    throw new Error(err);
  }
}