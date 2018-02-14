var strava = require('strava-v3');
strava.athlete.get(***REMOVED***id:'CLIENT_ID'***REMOVED***, function(err,payload,limits) ***REMOVED***
    if(!err) ***REMOVED***
        console.log(payload);
    ***REMOVED***
    else ***REMOVED***
        console.log(err);
    ***REMOVED***
***REMOVED***);
