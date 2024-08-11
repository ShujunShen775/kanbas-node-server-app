import model from "./model.js";
export const createModule = (cid, module) => {
  delete module._id;
  const newModule = {
    ...module,
    course: cid,
  };
  console.log('newModule :>> ', newModule);
  return model.create(newModule);
};
export const findAllModules = (courseId) => model.find({ course: courseId });
export const updateModule = (moduleId, module) =>
  model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
