import Task from "../models/task.js";

// @tested
// @method GET
// @route /api/v1/task
// @description To get all task.
export const getAllTask = async (req, res) => {
  try {
    const data = await Task.find();
    return res.status(201).json({
      success: true,
      message: "All task fetched successfully",
      response: data,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, message: "Failed to fetched task" });
  }
};

// @tested
// @method GET
// @route /api/v1/task/:id
// @description To get a task by ID.
export const getTaskbyID = async (req, res) => {
  try {
    const taskID = req.params.id;
    const specificTask = await Task.findById(taskID);
    return res.status(201).json({
      success: true,
      message: "All task fetched successfully",
      response: specificTask,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, message: "Failed to fetched task by ID" });
  }
};

// @tested
// @method POST
// @route /api/v1/create-task
// @description To get all task.
export const createTask = async (req, res) => {
  try {
    const { task, status, deadline } = req.body;

    const data = new Task(req.body);
    await data.save();
    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      response: data,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, message: "Failed to create task" });
  }
};

// @tested
// @method PUT
// @route /api/v1/update-task/:id
// @description To update a task by ID.
export const updateTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const { task, status, deadline } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(taskID, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      response: updatedTask,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: "Failed to Update task",
      error: error.message,
    });
  }
};

// @tested
// @method DELETE
// @route /api/v1/delete-task/:id
// @description To delete a task by ID.
export const deleteTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const data = await Task.findByIdAndDelete(taskID);
    return res.status(201).json({
      success: true,
      message: "Task deleted successfully",
      response: data,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, message: "Failed to delete task" });
  }
};
