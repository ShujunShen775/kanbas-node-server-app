import * as dao from "./dao.js";

export default function GradeRoutes(app) {
  const createGrade = async (req, res) => {
    const { quizId } = req.params;
    const question = await dao.createGrade(quizId, req.body);
    res.json(question);
  };
  const getGrade = async (req, res) => {
    const { gid } = req.params;
    const question = await dao.getGrade(gid);
    res.json(question);
  };
  const findAllGradesByUserId = async (req, res) => {
    const { quizId } = req.params;
    const questions = await dao.findAllGradesByUserId(quizId);
    res.json(questions);
  };
  const findAllGradesByQuizId = async (req, res) => {
    const { qid } = req.params;
    const status = await dao.findAllGradesByQuizId(qid, req.body);
    res.json(status);
  };
  app.post("/api/quizzes/:quizId/grade", createGrade);
  app.get("/api/grades", findAllGradesByUserId);
  app.get("/api/quizzes/:quizId/grades", findAllGradesByQuizId);
  app.get("/api/grades/:gid", getGrade);
}
