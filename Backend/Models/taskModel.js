const Joi = require("joi");
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false,
        required:true
    }
},
{
  timestamps:true
}
);
const Task = mongoose.model('task',taskSchema);

const validate = (item)=>{
   const shema = Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required()
   })
   return shema.validate(item);
};
const validateUpdate = (item)=>{
   const shema = Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required(),
    status:Joi.boolean().required()

   })
   return shema.validate(item);
};

module.exports = {Task,validate,validateUpdate};