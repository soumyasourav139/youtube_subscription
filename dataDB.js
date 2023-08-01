
require("dotenv").config();

//import data 
const connectDB = require("./db/connect");

//import schema model
const subscriber = require("./models/subscribers");
const dataJson =require("./data.json")


const start = async()=>
{
    try{
        await connectDB(process.env.MONOGODB_URL); // connnect MONGODB URL by .env file 
        await subscriber.create(dataJson);
        console.log("success");// success message geneate when collection is created on cluster
    }catch(error)
    {
        console.log(error);
    }
};


start();
