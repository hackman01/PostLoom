import { connectDB } from "../../lib/db";
import Waitlist from "../../models/model.waitlist";
import { sendWaitlistEmail } from "../../lib/mailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    await connectDB();

    const existing = await Waitlist.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "Already joined the waitlist" }, { status: 200 });
    }

    const user = await Waitlist.create({ name, email });

    await sendWaitlistEmail(name, email);

    return NextResponse.json({ message: "Added to waitlist successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
