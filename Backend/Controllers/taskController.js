const {Task,validate,validateUpdate} = require("../Models/taskModel");
const _ = require("lodash");

module.exports.addTask = async(req,res)=>{
    // validating the user inputs
    const { error } = validate(_.pick(req.body,["name","description"]));
    if(error)res.status(401).send({message:"task validation failed"});

    // picking what name and description only in the req.body object

    const {name,description} = _.pick(req.body,["name","description"]);
    console.log({name,description});
    try {
        const task = await Task.create({name,description});
        if(!task)res.status(401).send({message:"tasks not added"});
        res.status(200).send(task);
    } catch (err) {
        res.status(400).send({message:err.message});
    }
}
// getting the tasks from the databases
module.exports.getTasks = async (req,res)=>{
    try {
        const tasks = await Task.find();
        if(!tasks)res.status(401).send({message:"tasks not found"});
        res.status(200).send(tasks);
    } catch (err) {
        res.status(401).send({message:"failed to get the tasks"});
    }
};
// updating the task
module.exports.updateTask = async (req,res)=>{
    // validating the user inputs
   const {error} = validateUpdate(_.pick(req.body,["name","description","status"]));
   if(error)res.status(401).send({message:"updates validation failed"});

   // picking what name and description only in the req.body object

   const {name,description,status} = _.pick(req.body,"name","description","status");
   try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id,{name,description,status},{new:true});
    if(!updatedTask)res.status(401).send({message:"task is not updated"});
    res.status(201).send({message:"task updated successfully"});
   } catch (err) {
    res.status(401).send({message:"failed to update the tasks"});
   }
};

// deleting the task

module.exports.deleteTask = async (req,res)=>{
        try {
            const deletedTask = await Task.findByIdAndDelete(req.params.id);
            if(deletedTask)res.status(201).send({message:"successfully deleted task"});
        } catch (err) {
            res.status(401).send({message:"failed to delete the task"});
        }
}
module.exports.getSingleTask = async(req,res)=>{
    try {
        const data = await Task.findById(req.params.id);
        if(data)res.status(200).send(data);
    } catch (err) {
        res.status(401).send({message:"failed to get the task"});
    }
}