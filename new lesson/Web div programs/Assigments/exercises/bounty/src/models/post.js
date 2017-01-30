var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BountySchema = new Schema({
    firstName: {
        type: String
        , required: true
    }
    , lastName:{
        type: String
        , required: true
    }
    , 
        bountyAmount: Number,
    type:{type:String,
         enum:["sith" , " jedi"]}
       
    , living:Boolean})
module.exports = mongoose.model ("Bounty", BountySchema);