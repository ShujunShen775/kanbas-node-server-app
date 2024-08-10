import mongoose from "mongoose";
const gradeSchema = new mongoose.Schema(
  {
    updateDate: { type: Date, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, required: true },
    quizId: { type: mongoose.Schema.Types.ObjectId, required: true },
    answers: [String],
    score: { type: Number, required: true },
  },
  { collection: "grades" }
);
export default gradeSchema;
