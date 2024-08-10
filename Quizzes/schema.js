import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    course: { type: String, required: true },
    introduction: String,
    availableDate: { type: String, required: true },
    untilDate: { type: String, required: true },
    dueDate: { type: String, required: true },
    type: {
      type: String,
      enum: [
        "GRADED_QUIZ",
        "PRACTICE_QUIZ",
        "GRADED_SURVEY",
        "UNGRADED_SURVEY",
      ],
      default: "GRADED_QUIZ",
    },
    group: {
      type: String,
      enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
      default: "QUIZZES",
    },
    points: { type: Number, required: true },
    shuffleAnswers: { type: Boolean, default: true },
    multipleAttempts: { type: Boolean, default: false },
    showCorrectAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    accessCode: { type: String, default: "" },
    oneQuestionAtATime: { type: Boolean, default: false },
    published: { type: Boolean, default: false },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    questions: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
  },
  { collection: "quizzes" }
);
export default quizSchema;
