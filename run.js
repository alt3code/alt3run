var auth = require('./auth.json');
var https = require('https');

// get creds from external file
var access_token = auth.access_token;
var clientId = auth.client_id;

var strava = require('strava-v3');
<<<<<<< HEAD
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
=======
strava.athlete.get(***REMOVED***access_token***REMOVED***,function(err,payload,limits) ***REMOVED***
    if(!err) ***REMOVED***
        // console.log(payload);
    ***REMOVED***
    else ***REMOVED***
        console.log(err);
    ***REMOVED***
***REMOVED***);

function getActivityDetails(url, response) ***REMOVED***
  https.get(url, (res) => ***REMOVED***
    res.setEncoding('utf8');
    res.on('data', function (body) ***REMOVED***
>>>>>>> 179c6ee3f9d9b2a38984eaa48b988fff238b670f
        // Retrieves activity data
        var jsonData = JSON.parse(body);
        var jsonString = JSON.stringify(body);
        // console.log("Details = " + jsonString);
        return jsonString;
<<<<<<< HEAD
    });
  });
}

// Retrieves all the activities for an authenticated athletes
function getActivities(url, callback) {
  https.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', function (body) {
=======
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***

// Retrieves all the activities for an authenticated athletes
function getActivities(url, callback) ***REMOVED***
  https.get(url, (res) => ***REMOVED***
    res.setEncoding('utf8');
    res.on('data', function (body) ***REMOVED***
>>>>>>> 179c6ee3f9d9b2a38984eaa48b988fff238b670f
        // Retrieves activity data
        var jsonData = JSON.parse(body);
        console.log("jsonData[0].id = " + jsonData[0].id);
        return callback(jsonData[0].id);
        // return jsonData[0].id;
<<<<<<< HEAD
    });
  });
}
=======
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***
>>>>>>> 179c6ee3f9d9b2a38984eaa48b988fff238b670f

// Currently only retrieves the first activity from the list
const activitiesUrl = "https://www.strava.com/api/v3/athlete/activities?access_token="+access_token;
var data;

<<<<<<< HEAD
getActivities(activitiesUrl, function(response) {
=======
getActivities(activitiesUrl, function(response) ***REMOVED***
>>>>>>> 179c6ee3f9d9b2a38984eaa48b988fff238b670f
    // Here you have access to your variable
    var activityId = response;
    const activityUrl = "https://www.strava.com/api/v3/activities/"+activityId+"?access_token="+access_token;

<<<<<<< HEAD
    getActivityDetails(activityUrl, function(response) {
      var activityDetails = response;
      // console.log("Details = " + activityDetails);
    });
});
=======
    getActivityDetails(activityUrl, function(response) ***REMOVED***
      var activityDetails = response;
      // console.log("Details = " + activityDetails);
    ***REMOVED***);
***REMOVED***);
>>>>>>> 179c6ee3f9d9b2a38984eaa48b988fff238b670f

var express = require('express');
var app = express();
var request = require('request');

var server = require('http').createServer(app);
var io = require('socket.io')(server);

<<<<<<< HEAD
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
=======
app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next) ***REMOVED***
    res.sendFile(__dirname + '/index.html');
***REMOVED***);

io.on('connection', function(client) ***REMOVED***
    console.log('Client connected...');
    client.on('join', function(data) ***REMOVED***
        request("https://www.strava.com/api/v3/athlete/activities?access_token="+access_token, function (error, response, body) ***REMOVED***
            if (!error && response.statusCode == 200) ***REMOVED***
              client.emit('messages', body);
            ***REMOVED***
        ***REMOVED***);
    ***REMOVED***);
***REMOVED***);
server.listen(4200);

// Display JSON in browser (127.0.0.1:4200/data)
app.set('json spaces', 2);
app.get('/data', function(req, res)***REMOVED***

  request("https://www.strava.com/api/v3/athlete/activities?access_token="+access_token, function (error, response, body) ***REMOVED***
    if (!error && response.statusCode == 200) ***REMOVED***
      var activitiesJSON = JSON.parse(body);
      res.json(activitiesJSON);
    ***REMOVED***
  ***REMOVED***);
***REMOVED***);
>>>>>>> 179c6ee3f9d9b2a38984eaa48b988fff238b670f
