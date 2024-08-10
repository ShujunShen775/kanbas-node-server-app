import mongoose from "mongoose";
const choiceSchema = new mongoose.Schema(
  {
    content: { type: String, default: "" },
    isCorrect: { type: Boolean, default: false },
  },
  { collection: "questions" }
);
const questionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    quiz: { type: mongoose.Schema.Types.ObjectId, required: true },
    points: { type: Number, required: true },
    description: String,
    choice: [choiceSchema],
    type: {
      type: String,
      enum: ["TRUE/FALSE", "MULTIPLE_CHOICE", "FILL_IN_MULTIPLE_BLANKS"],
      default: "MULTIPLE_CHOICE",
    },
  },
  { collection: "questions" }
);
export default questionSchema;
