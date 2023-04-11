import  express from "express";
import dotenv from 'dotenv'

//configure env

dotenv.config();

//creating a rest object so that we can create apis


const app = express()


//Rest APIS 

app.get('/',(req,res)=>{
    res.send({
        message:"Welcoe to Farmigo app"
    })
})


const PORT = process.env.PORT||8080;


//run listen

app.listen (PORT,()=>{
    console.log(`server Running on ${PORT}`);
})