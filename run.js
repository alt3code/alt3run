var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new StravaApiV3.ActivitiesApi()

var id = 789; // ***REMOVED***Long***REMOVED*** The identifier of the activity.

var opts = ***REMOVED***
  'includeAllEfforts': true // ***REMOVED***Boolean***REMOVED*** Whether all segments efforts should be included in the response
***REMOVED***;

var callback = function(error, data, response) ***REMOVED***
  if (error) ***REMOVED***
    console.error(error);
  ***REMOVED*** else ***REMOVED***
    console.log('API called successfully. Returned data: ' + data);
  ***REMOVED***
***REMOVED***;
api.getActivityById(id, opts, callback);
