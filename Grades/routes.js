import * as dao from "./dao.js";

export default function GradeRoutes(app) {
  const createGrade = async (req, res) => {
    const { quizId, courseId } = req.params;
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const grade = await dao.createGrade(
      quizId,
      courseId,
      req.body,
      currentUser._id
    );
    res.json(grade);
  };
  const previewGrade = async (req, res) => {
    const { quizId } = req.params;
    const score = await dao.getScore(quizId, req.body);
    res.json(score);
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
  const findAllGradesByCourseId = async (req, res) => {
    const { courseId } = req.params;
    const [grades, users, quizzes] = await dao.findAllGradesByCourse(courseId);
    grades.forEach((i) => console.log(i));
    res.json(
      grades.map((i, index) => ({
        score: i.score,
        updateDate: i.updateDate,
        studentName: users[index].username,
        quizName: quizzes[index].name,
      }))
    );
  };
  const findAllGradesByQuizId = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.findAllGradesByQuiz(quizId);
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
  app.post("/api/quizzes/:courseId/:quizId/grade", createGrade);
  app.post("/api/quizzes/:quizId/preview", previewGrade);
  app.get("/api/grades", findAllGradesByUserId);
  app.get("/api/quizzes/:quizId/grades", findAllGradesByQuizId);
  app.get("/api/grades/:gid", getGrade);
  app.get("/api/quizzes/:quizId/grade", getGradeByQuizAndUser);
  app.get("/api/quizzes/:courseId/allGrades", findAllGradesByCourseId);
}
