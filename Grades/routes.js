import * as dao from "./dao.js";

export default function GradeRoutes(app) {
  const createGrade = async (req, res) => {
    const { quizId } = req.params;
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const grade = await dao.createGrade(quizId, req.body, currentUser._id);
    res.json(grade);
  };
  const getGrade = async (req, res) => {
    const { gid } = req.params;
    const question = await dao.getGrade(gid);
    res.json(question);
  };
  const findAllGradesByUserId = async (req, res) => {
    const { quizId } = req.params;
    const questions = await dao.findAllGradesByUser(quizId);
    res.json(questions);
  };
  const findAllGradesByQuizId = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.findAllGradesByQuiz(quizId, req.body);
    res.json(status);
  };
  const getGradeByQuizAndUser = async (req, res) => {
    const { quizId } = req.params;
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    console.log("qid, currentUser._id :>> ", quizId, currentUser._id);
    const grade = await dao.getGradeByQuizAndUser(quizId, currentUser._id);
    res.json(grade);
  };
  app.post("/api/quizzes/:quizId/grade", createGrade);
  app.get("/api/grades", findAllGradesByUserId);
  app.get("/api/quizzes/:quizId/grades", findAllGradesByQuizId);
  app.get("/api/grades/:gid", getGrade);
  app.get("/api/quizzes/:quizId/grade", getGradeByQuizAndUser);
}
