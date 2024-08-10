import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const createQuiz = async (req, res) => {
    try {
      const { cid } = req.params;
      const module = await dao.createQuiz(cid, req.body);
      res.json(module);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.mid);
    res.json(status);
  };
  const findAllQuizzes = async (req, res) => {
    const { cid } = req.params;
    const quizzes = await dao.findAllQuizzes(cid);
    res.json(quizzes);
  };
  const updateQuiz = async (req, res) => {
    const { qid } = req.params;
    const status = await dao.updateQuiz(qid, req.body);
    res.json(status);
  };
  const publishQuiz = async (req, res) => {
    const { qid } = req.params;
    const status = await dao.publishQuiz(qid);
    res.json(status);
  };
  app.post("/api/courses/:cid/quizzes", createQuiz);
  app.get("/api/courses/:cid/quizzes", findAllQuizzes);
  app.put("/api/quizzes/:qid", updateQuiz);
  app.delete("/api/quizzes/:qid", deleteQuiz);
  app.put("/api/quizzes/:qid/publish", publishQuiz);
}
