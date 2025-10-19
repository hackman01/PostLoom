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
    to: "amanmourya295@gmail.com",
    subject: "New Waitlist Signup - PostLoom 🚀",
    text: `New signup for PostLoom Waitlist:\n\nName: ${name}\nEmail: ${email}`,
  };

  await transporter.sendMail(mailOptions);
  await transporter.sendMail({
    from: process.env.ADMIN_EMAIL,
    to: email,
    subject: "Welcome to PostLoom Waitlist!",
    text: `Hey ${name}, thanks for joining PostLoom's waitlist! We're excited to have you onboard.`,
  });
}
