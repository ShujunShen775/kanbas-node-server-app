import model from "./model.js";
import userModel from "../Users/model.js";
export const createCourse = (course) => {
  delete course._id;
  return model.create(course);
};
export const findAllCourses = () => model.find();
export const updateCourse = (courseId, course) =>
  model.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
export const enrollCourse = async (courseId, userId) => {
  await model.updateOne({ _id: courseId }, { $push: { enrollers: userId } });
  await userModel.updateOne(
    { _id: userId },
    { $push: { enrolledList: courseId } }
  );
};
export const unenrollCourse = async (courseId, userId) => {
  await model.updateOne({ _id: courseId }, { $pull: { enrollers: userId } });
  await userModel.updateOne(
    { _id: userId },
    { $pull: { enrolledList: courseId } }
  );
};
