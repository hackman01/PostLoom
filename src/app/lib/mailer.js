import nodemailer from "nodemailer";

export async function sendWaitlistEmail(name, email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: "New Waitlist Signup - PostLoom 🚀",
    text: `New signup for PostLoom Waitlist:\n\nName: ${name}\nEmail: ${email}`,
  };

  await transporter.sendMail(mailOptions);
}
