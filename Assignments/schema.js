import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    course: { type: String, required: true },
    description: String,
    available: { type: Date },
    until: { type: Date },
    points: { type: Number },
  },
  { collection: "assignments" }
);
export default AssignmentSchema;
