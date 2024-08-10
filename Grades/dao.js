import model from "./model.js";
import quizModel from "../Quizzes/model.js";
import userModel from "../Users/model.js";
export const createGrade = async (quizId, userId, answers) => {
  const newGrade = model.create({
    updateDate: new Date(),
    quizId,
    authorId: userId,
    answers,
  });
};
export const getGrade = (gid) => model.findById(gid);
export const findAllGradesByUser = (userId) => model.find({ authorId: userId });
export const findAllGradesByQuiz = (quizId) => model.find({ quizId: quizId });
