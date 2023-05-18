const mongoose = require("mongoose");

module.exports.dbConnection = async ()=>{
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/TO_DO_APP");
        console.log("connected to database");
    } catch (err) {
        console.log(err.message);
    }
};