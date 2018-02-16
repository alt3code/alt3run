var auth = require('./auth.json');
var https = require('https');

// get creds from external file
var access_token = auth.access_token;
var clientId = auth.client_id;

var strava = require('strava-v3');
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
        // Retrieves activity data
        var jsonData = JSON.parse(body);
        var jsonString = JSON.stringify(body);
        console.log("Details = " + jsonString);
        return jsonString;
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***

// Retrieves all the activities for an authenticated athletes
function getActivities(url, callback) ***REMOVED***
  https.get(url, (res) => ***REMOVED***
    res.setEncoding('utf8');
    res.on('data', function (body) ***REMOVED***
        // Retrieves activity data
        var jsonData = JSON.parse(body);
        console.log("jsonData[0].id = " + jsonData[0].id);
        return callback(jsonData[0].id);
        // return jsonData[0].id;
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***

// Currently only retrieves the first activity from the list
const activitiesUrl = "https://www.strava.com/api/v3/athlete/activities?access_token="+access_token;
var data;

getActivities(activitiesUrl, function(response) ***REMOVED***
    // Here you have access to your variable
    var activityId = response;
    const activityUrl = "https://www.strava.com/api/v3/activities/"+activityId+"?access_token="+access_token;

    getActivityDetails(activityUrl, function(response) ***REMOVED***
      var activityDetails = response;
      console.log("Details = " + activityDetails);
    ***REMOVED***);
***REMOVED***);

var express = require('express');
var app = express();
var request = require('request');

app.set('json spaces', 2);
app.get('/data', function(req, res)***REMOVED***

  request("https://www.strava.com/api/v3/athlete/activities?access_token="+access_token, function (error, response, body) ***REMOVED***
    if (!error && response.statusCode == 200) ***REMOVED***
      var activitiesJSON = JSON.parse(body);
      res.json(activitiesJSON);
    ***REMOVED***
  ***REMOVED***)
***REMOVED***);

app.listen(3000);
