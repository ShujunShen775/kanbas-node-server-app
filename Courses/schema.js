import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    startDate: Date,
    endDate: Date,
    credits: Number,
    description: String,
    enrollers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
    authorId: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { collection: "courses" }
);
export default courseSchema;
