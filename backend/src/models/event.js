const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true,
    default : 'New Event'
  },
  tempId:{
    type : String,
    default:"ABCDEFGH"
  },
  userEmailId : {
    type : String,
    default:"ABCDEFGH"
  },
  userId : {
    type : String,
    default:"ABCDEFGH"
  },
  description : {
    type : String,
    default : ''
  },
  start : {
    type : String,
    required : true
  },
  end : {
    type : String,
    required : true
  },
  allDay : {
    type : String,
    default : true
  },
  status : {
    type : String,
    required : true,
    default:'busy'
  },
  color : {
    type : String,
    required:true,
    default : '#A52A2A' 
  }
  

} , { timestamps : true}  );


module.exports = mongoose.model("Event" , eventSchema)