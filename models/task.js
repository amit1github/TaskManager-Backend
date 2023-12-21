import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "Task field is required"],
  },
  status: {
    type: String,
    required: [true, "Status field is required"],
  },
  deadline: {
    type: Date,
    // required: true,
  },
});

const Task = mongoose.model("task", TaskSchema);

export default Task;