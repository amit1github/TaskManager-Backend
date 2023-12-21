import express from "express";

const router = express.Router();

import {
  getAllTask,
  getTaskbyID,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.js";

router.get("/task", getAllTask);
router.get("/task/:id", getTaskbyID);
router.post("/create-task", createTask);
router.put("/update-task/:id", updateTask);
router.delete("/delete-task/:id", deleteTask);

export default router;
