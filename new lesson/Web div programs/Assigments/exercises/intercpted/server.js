var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;


//app.use("/vegetables", veggieRoutes);
var arrayOfFruits = [];
app.use("/", function(req,res,next){
        console.log("hey");
   arrayOfFruits = [ {
    "type": "banana"
    , "brand": "chiquita"
    , "price": "0.5"
}, {
    "type": "apple"
    , "brand": "gala"
    , "price": "0.5"
}, {
    "type": "orange"
    , "brand": "naval"
    , "price": "0.75"
}];
    next();
        });
app.get("/fruit", function (req, res) {
    var query = req.query;
    console.log(query);
    if (req.query.type) {
        var chkFruits = arrayOfFruits.filter(function (item) {
            console.log("item: " + item.type);
            return item.type.toLowerCase() === req.query.type.toLowerCase();
        });
        console.log(chkFruits);
        res.send(chkFruits);
    }
    else if (req.query.brand) {
        var chkFruits = arrayOfFruits.filter(function (item) {
            console.log("item: " + item.brand);
            return item.brand.toLowerCase() === req.query.brand.toLowerCase();
        });
        console.log(chkFruits);
        res.send(chkFruits);
    } else if (req.query.price) {
        var chkFruits = arrayOfFruits.filter(function (item) {
            console.log("item: " + item.price);
            return item.price=== req.query.price;
        });
        console.log(chkFruits);
        res.send(chkFruits);
    }
    else {
        res.send(arrayOfFruits);
    };
});
app.listen(port, function() {
    console.log("Your app is listening on port " + port);
});
