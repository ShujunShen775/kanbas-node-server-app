import model from "./model.js";
export const createAssignment = (cid, assignment) => {
  delete assignment._id;
  const newAssignment = {
    ...assignment,
    course: cid,
  };
  return model.create(newAssignment);
};
export const findAllAssignments = (courseId) =>
  model.find({ course: courseId });
export const updateAssignment = (aid, assignment) =>
  model.updateOne({ _id: aid }, { $set: assignment });
export const deleteAssignment = (aid) => model.deleteOne({ _id: moduleId });
