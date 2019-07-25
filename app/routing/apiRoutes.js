//var info = require ("path");
var friendsData = require("../data/friends") 

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        match = {
        name: "",
        photo: "",
        friendDifference: 50
        };

        newFriendData = req.body; 
        newFriendScores = newFriendData.scores;
        totalDifference; 

        for (let i = 0; i < friendsData.length; i++) {
            currentFriend = friendsData[i];
            var totalDifference = 0; 

            
            for (let j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = newFriendScores[j];
                intCurrentUser = parseInt(currentUserScore);
                intCurrentFriend = parseInt(currentFriendScore);
                totalDifference = totalDifference + Math.abs(intCurrentUser - intCurrentFriend);

                if (totalDifference <= Match.friendDifference) {
                    Match.name = currentFriend.name;
                    Match.photo = currentFriend.photo; 
                    Match.friendDifference = totalDifference;
                }
            }

        friends.push(newFriendData);
        }
    });
};

 