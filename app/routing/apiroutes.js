var friends = require("../data/friends")

module.exports = function(app){

    app.get('/api/friends', function(req,res){
        return res.json(friends);
    });
    app.post('/api/friends', function(req,res){
        var newfriend = req.body;
        friends.push(newfriend);
        var bestNumber = bestfriend(newfriend.name,newfriend.scores);
        res.json(friends[bestNumber]);
    });

};

function bestfriend(name,scores){
   var distances = [];
    for (var i=0; i<friends.length;i++) {
        if(friends[i].name !== name) {
            var distance = 0;
            for (var n=0; n<scores.length;n++) {
                distance = distance + Math.abs(parseInt(scores[n]) - parseInt(friends[i].scores[n]));
            }
            distances.push(distance);
        }
    }
    console.log("bestfriend: " + distances.indexOf(Math.min(distances)));
    return distances.indexOf(Math.min(distances));
}