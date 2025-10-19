import mongoose from "mongoose";

const WaitlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  joinedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Waitlist || mongoose.model("Waitlist", WaitlistSchema);
