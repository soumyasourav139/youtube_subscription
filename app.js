//for .env file configuration
require("dotenv").config();

//Import the express module
const express = require ("express");

//enable express usage
const app =express();
const connectDB = require("./db/connect");

//Declare a specific listening port number
const PORT  = process.env.PORT || 3000;

//router path
const subscriber_routes = require("./routes/data")

//THE HOME ROUTE WHICH DISPLAY A CUSTOME MESSAGE;
app.get("/",(req,res)=>
{
    res.send({message:"this project is create by soumya sourav paharaj"});
});

/**Since Mongoose functions are asynchronous, we will be using async/await.
 Once you have the data this code uses a try/catch block to send it **/



//middlewera ot to set router
app.use("/subscribers",subscriber_routes);


const start = async()=>
{
    try{
       await connectDB(process.env.MONOGODB_URL);

      app.listen(PORT,()=>{
        console.log(` ${PORT} port connected`); //message showing the pot number 
      })
    }catch(error){
        //incase if errror
        res.status(400).send(error)
    }

};


start();