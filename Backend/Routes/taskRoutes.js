const { addTask, getTasks, updateTask, deleteTask, getSingleTask } = require("../Controllers/taskController");

const Router = require("express").Router();

Router.post("/addTask",addTask);
Router.get("/allTasks",getTasks);
Router.get("/task/:id",getSingleTask);
Router.put("/update/:id",updateTask);
Router.delete("/delete/:id",deleteTask);

module.exports = Router;