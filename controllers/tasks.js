const Task = require("../models/task");
const asynWrapper = require("../middleware/async");
const {CreateCustomError} = require('../errors/custom-error')

const getAllTasks = asynWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

const createTask = asynWrapper(async (req, res) => {
  const task = await Task.insertMany(req.body);
  res.status(201).json({ task });
});

const getTask = asynWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
   return next(CreateCustomError(`No task with id : ${taskID} `,404))
  }
  res.status(200).json({ task });
});

const updateTask = asynWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(CreateCustomError(`No task with id : ${taskID} `,404))
  }
  res.status(200).json({ task });
});

const deleteTask = asynWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(CreateCustomError(`No task with id : ${taskID} `,404))
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
