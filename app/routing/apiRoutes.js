//var info = require ("path");
var friendsData = require("../data/friends") 

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        var scoreInteters;
        var currentFriendScores = [];
        for (let i = 0; i < req.body.scores.length; i++) {
             scoreInteters = parseInt(req.body.scores[i]);
             currentFriendScores.push(scoreInteters);
        }
        console.log(currentFriendScores);
    });
};

