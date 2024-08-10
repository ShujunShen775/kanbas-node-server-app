import model from "./model.js";
export const createQuiz = (cid, quiz) => {
  delete quiz._id;
  const newQuiz = {
    ...quiz,
    course: cid,
  };
  return model.create(newQuiz);
};
export const findAllQuizzes = (courseId) => model.find({ course: courseId });
export const updateQuiz = (quizId, quiz) =>
  model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });
export const publishQuiz = (quizId) =>
  model.updateOne({ _id: quizId }, { $set: { published: true } });
