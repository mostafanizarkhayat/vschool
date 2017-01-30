var express = require("express");
var fruitRoutes = express.Router();
var arrayOfFruits = [{
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
}]
fruitRoutes.get("/", function (req, res) {
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
module.exports = fruitRoutes;