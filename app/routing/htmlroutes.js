module.exports = function(app){
    var path = require('path');

    app.get('/', function(req,res){
        console.log('we hit the home route')
        res.sendFile(path.join(__dirname, '../public/home.html'));
    })
    app.get('/survey', function(req,res){
        console.log('we hit the home route')
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    })
    

}
