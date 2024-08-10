import model from "./model.js";
import quizModel from "../Quizzes/model.js";
export const createQuestion = async (quizId, question) => {
  delete question._id;
  const newQuestion = model.create({
    ...question,
    quiz: quizId,
  });
  await quizModel.updateOne(
    { _id: quizId },
    { $push: { questions: newQuestion._id } }
  );
};
export const findAllQuestions = (quizId) => model.find({ quiz: quizId });
export const updateQuestion = (qid, question) =>
  model.updateOne({ _id: qid }, { $set: question });
