var auth = require('./auth.json');
var https = require('https');

// get creds from external file
var access_token = auth.access_token;
var clientId = auth.client_id;

var strava = require('strava-v3');
strava.athlete.get({access_token},function(err,payload,limits) {
    if(!err) {
        // console.log(payload);
    }
    else {
        console.log(err);
    }
});

function getActivityDetails(url, response) {
  https.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', function (body) {
        // Retrieves activity data
        var jsonData = JSON.parse(body);
        var jsonString = JSON.stringify(body);
        // console.log("Details = " + jsonString);
        return jsonString;
    });
  });
}

// Retrieves all the activities for an authenticated athletes
function getActivities(url, callback) {
  https.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', function (body) {
        // Retrieves activity data
        var jsonData = JSON.parse(body);
        console.log("jsonData[0].id = " + jsonData[0].id);
        return callback(jsonData[0].id);
        // return jsonData[0].id;
    });
  });
}

// Currently only retrieves the first activity from the list
const activitiesUrl = "https://www.strava.com/api/v3/athlete/activities?access_token="+access_token;
var data;

getActivities(activitiesUrl, function(response) {
    // Here you have access to your variable
    var activityId = response;
    const activityUrl = "https://www.strava.com/api/v3/activities/"+activityId+"?access_token="+access_token;

    getActivityDetails(activityUrl, function(response) {
      var activityDetails = response;
      // console.log("Details = " + activityDetails);
    });
});

var express = require('express');
var app = express();
var request = require('request');

var server = require('http').createServer(app);
var io = require('socket.io')(server);

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(client) {
    console.log('Client connected...');
    client.on('join', function(data) {
        request("https://www.strava.com/api/v3/athlete/activities?access_token="+access_token, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              client.emit('messages', body);
            }
        });
    });
});
server.listen(4300);

// Display JSON in browser (127.0.0.1:4200/data)
app.set('json spaces', 2);
app.get('/data', function(req, res){

  request("https://www.strava.com/api/v3/athlete/activities?access_token="+access_token, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var activitiesJSON = JSON.parse(body);
      res.json(activitiesJSON);
    }
  });
});
