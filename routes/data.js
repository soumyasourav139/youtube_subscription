//Import the express module
const express= require("express");


const router= express.Router();

const 
{
 getAllData,getAllDataName,getAllDataId  
} = require("../controllers/data")

//THE HOME ROUTE WHICH DISPLAY A CUSTOME MESSAGE;
router.route("/").get(getAllData);


// TO GET NAME AND SUBSCRIBED CHANNEL OF SUBSCRIBERS
router.route("/name").get(getAllDataName);

// TO GET THE ONLY ONE SUBSCRIBER DATA WHICH IS FIND BY ID
router.route("/:id").get(getAllDataId);

module.exports = router;