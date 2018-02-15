var auth = require('./auth.json');
var https = require('https');

// get creds from external file
var access_token = auth.access_token;
var clientId = auth.client_id;

var strava = require('strava-v3');
strava.athlete.get(***REMOVED***access_token***REMOVED***,function(err,payload,limits) ***REMOVED***
    if(!err) ***REMOVED***
        console.log(payload);
    ***REMOVED***
    else ***REMOVED***
        console.log(err);
    ***REMOVED***
***REMOVED***);

// Retrieves all the activities for an authenticated athletes
function getActivities() ***REMOVED***
  https.get("https://www.strava.com/api/v3/athlete/activities?access_token="+access_token, (res) => ***REMOVED***
    res.setEncoding('utf8');
    res.on('data', function (body) ***REMOVED***
        // Retrieves activity data
        var jsonData = JSON.parse(body);
        console.log("data = " + jsonData[0].id);
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***
getActivities();
