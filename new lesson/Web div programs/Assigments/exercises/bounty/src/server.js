var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var app = express();

var classBounty = [];
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/bounty", function(){
    console.log("database is connected");
})
 app.use("/api", require("./routes/bounty"));
app.listen (8000     , function(){
    console.log("server is runing on port");
    
});


