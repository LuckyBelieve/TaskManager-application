const express = require("express");
require('dotenv').config();
const App = express();
const cors = require("cors");
const {dbConnection} = require("./config/dbConnection");
const taskRoutes = require("./Routes/taskRoutes");

const PORT = process.env.PORT

App.use(cors({
    origin: "http://localhost:5173"
}));
App.use(express.json());
App.use(express.urlencoded({extended:false}));

App.use("/api/tasks",taskRoutes);

dbConnection();
App.listen(PORT,()=>{
    console.log("server running at http://localhost:"+PORT);
});