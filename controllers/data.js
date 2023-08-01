//Import the express module
const { response } = require("express");

//import subscriber path 
const subscriber = require("../models/subscribers")

const getAllData = async(req,res)=>
{
     //To retrieve records from a database collection we make use of the .find() function.
    const mydata = await subscriber.find({});
    try{

//Since no parameters have been provided, it will return all of the items in the database.    
    res.status(200).json({ mydata})
    }catch(error){    //send error if route not found
        res.status(404).send(error);
    }
};

 // TO GET NAME AND SUBSCRIBED CHANNEL OF SUBSCRIBERS

const getAllDataName = async(req,res)=>
{

    //To retrieve selected records from a database collection we make use of the .find().select() function.

    const subscribers = await subscriber.find().select({
        name:1, subscribedChannel:1, _id:0
      })    
      try {
    ///Since no parameters have been provided, it will return all of the items in the database.    
    res.status(200).json({subscribers })
      }catch(error){   //send error if route not found
      res.status(404).send(error);}
};
 
// TO GET THE ONLY ONE SUBSCRIBER DATA WHICH IS FIND BY ID
const getAllDataId = async(req,res)=>
{
   try{
    const  _id=req.params.id;

     //mongoose findById() function to find a single document by its _id field.
    const subscriberData = await subscriber.findById(_id);
res.send(subscriberData);
   }
   catch(error){
    //  incase if we enter wrong id
    res.status(400).send({message:"Error! Subscriber Id does not exist"});
}
}


//Exports module
module.exports = {getAllData,getAllDataName,getAllDataId};