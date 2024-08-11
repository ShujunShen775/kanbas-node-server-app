import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  const createAssignment = async (req, res) => {
    const { cid } = req.params;
    const assignment = await dao.createAssignment(cid, req.body);
    res.json(assignment);
  };
  const deleteAssignment = async (req, res) => {
    const status = await dao.deleteAssignment(req.params.aid);
    res.json(status);
  };
  const findAllAssignments = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findAllAssignments(cid);
    res.json(modules);
  };
  const updateAssignment = async (req, res) => {
    const { aid } = req.params;
    const status = await dao.updateAssignment(aid, req.body);
    res.json(status);
  };
  app.post("/api/courses/:cid/assignments", createAssignment);
  app.get("/api/courses/:cid/assignments", findAllAssignments);
  app.put("/api/assignments/:aid", updateAssignment);
  app.delete("/api/assignments/:aid", deleteAssignment);
}
