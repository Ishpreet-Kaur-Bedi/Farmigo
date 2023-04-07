const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database")

//config

dotenv.config({path:"backend/config/config.env"})


//connecting to db

connectDatabase();



app.listen(process.env.PORT,()=>{

    console.log(`server on http://127.0.0.1:${process.env.PORT}`)
})