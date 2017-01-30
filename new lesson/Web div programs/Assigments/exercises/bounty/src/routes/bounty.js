var express = require('express');
var routBounty = express.Router();
var Bounty = require("../models/post");
routBounty.route("/bounty/")
    .get(function (req, res) {
    Bounty.find(function (err, Bounties) {
        if (err) {
            console.log("Error found");
            res.status(500).send(err);
        }
        else {
            console.log("");
            res.send(Bounties);
        }
    });
}).post(function (req, res) {
    var newBounty = new Bounty(req.body);
    newBounty.save(function (err, newBountyObj) {
        console.log("saved")
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(newBountyObj);
        }
    });
});
module.exports = routBounty;
//
//app.put('/bounty/:id', function (req, res) {
//    if (classBounty.length <= req.params.id || req.params.id < 0) {
//        res.statusCode = 404;
//        return res.send('Error 404: No quote found');
//    }
//    console.log("update id " + req.params.id)
//    for (var i = 0; i < classBounty.length; i++) {
//        if (classBounty[i].id == req.params.id) {
//            console.log(req.params)
//            classBounty[i].id = req.params.id;
//            classBounty[i].FirstName = req.body.FirstName;
//            classBounty[i].LastName = req.body.LastName;
//            classBounty[i].Living = req.body.Living;
//            classBounty[i].BountyAmount = req.body.BountyAmount;
//            classBounty[i].Type = req.body.Type;
//            res.send(classBounty[i]);
//        }
//    }
//});
//app.delete('/bounty/:id', function (req, res) {
//    if (classBounty.length <= req.params.id) {
//        res.statusCode = 404;
//        return res.send('Error 404: No quote found');
//    }
//    classBounty.splice(req.params.id, 1);
//    // res.json(true);
//    res.send(classBounty);
//});
