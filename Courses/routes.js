import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    try {
      const currentUser = req.session["currentUser"];
      const course = await dao.createCourse({
        ...req.body,
        authorId: currentUser._id,
      });
      res.json(course);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.id);
    res.json(status);
  };
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };
  const updateCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateCourse(id, req.body);
    res.json(status);
  };
  const enrollCourse = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const { cid } = req.params;
    const status = await dao.enrollCourse(cid, currentUser._id);
    res.json(status);
  };
  const unenrollCourse = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const { cid } = req.params;
    const status = await dao.unenrollCourse(cid, currentUser._id);
    res.json(status);
  };
  app.post("/api/courses", createCourse);
  app.get("/api/courses", findAllCourses);
  app.put("/api/courses/:id", updateCourse);
  app.delete("/api/courses/:id", deleteCourse);
  app.post("/api/courses/enroll/:cid", enrollCourse);
  app.post("/api/courses/unenroll/:cid", unenrollCourse);
}
