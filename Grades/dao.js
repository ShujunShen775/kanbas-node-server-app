import model from "./model.js";
import quizModel from "../Quizzes/model.js";
import userModel from "../Users/model.js";
import questionModel from "../Questions/model.js";
export const createGrade = async (quizId, answers, userId) => {
  const quiz = await quizModel.findOne({ _id: quizId });
  const questions = await Promise.all(
    quiz.questions.map((i) => questionModel.findOne({ _id: i }))
  );
  const score = questions.reduce((r, i, index) => {
    if (i.type === "FILL_IN_MULTIPLE_BLANKS") {
      if (i.choice.every((j, jdx) => answers[index][jdx] === j.content)) {
        r += i.points;
      }
    } else {
      if (
        i.choice.find((j) => {
          console.log("object :>> ", answers[index], j);
          return answers[index] === j.content && j.isCorrect;
        })
      ) {
        r += i.points;
      }
    }
    return r;
  }, 0);
  const grade = await model.create({
    updateDate: new Date(),
    quizId,
    authorId: userId,
    answers,
    score,
  });
  return grade;
};
export const getGrade = (gid) => model.findById(gid);
export const findAllGradesByUser = (userId) => model.find({ authorId: userId });
export const findAllGradesByQuiz = (quizId) => model.find({ quizId: quizId });
export const getGradeByQuizAndUser = (quizId, userId) =>
  model.findOne({ quizId, authorId: userId });
