import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const createQuestion = async (req, res) => {
    try {
      const { quizId } = req.params;
      const question = await dao.createQuestion(quizId, req.body);
      res.json(question);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  const findAllQuestions = async (req, res) => {
    const { quizId } = req.params;
    const questions = await dao.findAllQuestions(quizId);
    res.json(questions);
  };
  const updateQuestion = async (req, res) => {
    const { qid } = req.params;
    const status = await dao.updateQuestion(qid, req.body);
    res.json(status);
  };
  app.post("/api/quizzes/:quizId/question", createQuestion);
  app.get("/api/quizzes/:quizId/questions", findAllQuestions);
  app.put("/api/questions/:qid", updateQuestion);
}
