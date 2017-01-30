var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;
var fruitRoutes = require("./routes/fruitRoutes");
//var veggieRoutes = require("./routes/veggieRoutes");

app.use("/fruits", fruitRoutes);
//app.use("/vegetables", veggieRoutes);

app.listen(port, function() {
    console.log("Your app is listening on port " + port);
});
