import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  module: { type: String, required: true },
  description: String,
});
const moduleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    course: { type: String, required: true },
    description: String,
    lessons: [lessonSchema],
  },
  { collection: "modules" }
);
export default moduleSchema;
