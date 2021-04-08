const Event = require('../models/event');
// const jwt = require('jsonwebtoken');

exports.createEvent = async (req,res,next) => {
    
    const {
        tempId,
        userId,
        userEmailId,
        title,
        description,
        start,
        end,
        allDay,
        status,
        color
    } = req.body;
    console.log(req.body);
    const _event = new Event({
        tempId,
        userId,
        userEmailId,
        title,
        description,
        start,
        end,
        allDay,
        status,
        color
    });
    try{
      await _event.save((error , data) => {
        // console.log(error);
        if(error)
        {
          return res.status(400).send(error)
        }
        if(data){
          return res.status(201).json("Event created successfully")
        }
      })
    
    }
    catch{
      res.status(400).send("ERRor")
    }   
}

exports.getEvent = async (req,res,next) => {

    try{
        Event.find({"userId" : req.params.id} ,(err , items) => {
            if(err){
                console.log("ERROR");
                res.status(400).send(err);
              }
              if(items){
                res.status(200).send(items);
              }
            })
    }
    catch(err) {
        res.send("Error while loading Event Data")        
    }
    
}

exports.deleteEvent = async (req,res,next) => {

    try{
      // console.log("IDDDDDDDDDDDDDDDDDDDDDDDD"+req.params.id);
      Event.findOneAndRemove({tempId: req.params.id}, function(err,items)
      {
         if(err){
            console.log("ERROR");
          }
          if(items){
            res.status(200).send({
              message : "Successfully Deleted"
            });
          }
        })
    }
    catch(err) {
        res.send({
          message :"Error while Deleting Event Data"
        }) 
    }   
}

exports.updateEvent = async (req,res,next) => {  
    try{
      // console.log("IDDDDDDDDDDDDDDDDDDDDDDDD"+req.params.id);
      // console.log(req.body);
      await Event.findOneAndUpdate({tempId : req.params.id},{ $set : req.body },{new : true })
      res.statusCode = 200 ;
      res.send({
        message : "Event Data has been updated successfully"
      }) 
  
    }
    catch(err) {
        res.send({
          message : "Error while Deleting Event Data"
        })
    }
    
  }